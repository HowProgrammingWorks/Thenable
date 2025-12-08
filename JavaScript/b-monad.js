'use strict';

class Thenable {
  constructor(run) {
    this.run = run;
  }
  static of = (v) => new Thenable((res) => res(v));
  then = (res, rej) => this.run(res, rej);
  map = (fn) => this.chain((v) => Thenable.of(fn(v)));
  chain = (fn) =>
    new Thenable((res, rej) => this.run((v) => fn(v).then(res, rej), rej));
}

// Tests

const run = (m) => {
  const data = { result: null, error: null };
  m.then(
    (value) => {
      data.result = value;
    },
    (error) => {
      data.error = error;
    },
  );
  return data;
};

const eq = (a, b) => a.error === b.error && a.result === b.result;

const assertLaw = (name, left, right) => {
  const l = run(left);
  const r = run(right);
  const ok = eq(l, r);
  console.log(name, ok ? 'OK' : 'FAIL', { left: l, right: r });
};

const chain = (m, f) => m.chain(f);

const f = (x) => Thenable.of(x + 1);
const g = (x) => Thenable.of(x * 2);

// 1. Left identity: of(a).chain(f) = f(a)

const testLeftIdentity = () => {
  const a = 10;
  const left = Thenable.of(a).chain(f);
  const right = f(a);
  assertLaw('Left identity', left, right);
};

// 2. Right identity: m.chain(of) = m

const testRightIdentity = () => {
  const m = Thenable.of(10);
  const left = m.chain(Thenable.of);
  const right = m;
  assertLaw('Right identity', left, right);
};

// 3. Associativity: m.chain(f).chain(g) = m.chain(x => f(x).chain(g))

const testAssociativity = () => {
  const m = Thenable.of(10);
  const left = chain(chain(m, f), g);
  const right = chain(m, (x) => chain(f(x), g));
  assertLaw('Associativity', left, right);
};

testLeftIdentity();
testRightIdentity();
testAssociativity();
