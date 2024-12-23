'use strict';

class Query {
  constructor(table) {
    this.options = { table, fields: ['*'], where: {} };
  }

  where(conditions) {
    Object.assign(this.options.where, conditions);
    return this;
  }

  order(field) {
    this.options.order = field;
    return this;
  }

  limit(count) {
    this.options.limit = count;
    return this;
  }

  then(resolve) {
    const { table, fields, where, limit, order } = this.options;
    const cond = Object.entries(where)
      .map((e) => e.join('='))
      .join(' AND ');
    const sql = `SELECT ${fields} FROM ${table} WHERE ${cond}`;
    const opt = `ORDER BY ${order} LIMIT ${limit}`;
    resolve(sql + ' ' + opt);
  }
}

// Usage

const main = async () => {
  const sql = await new Query('cities')
    .where({ country: 10, type: 1 })
    .order('population')
    .limit(10);
  console.log(sql);
};

main();
