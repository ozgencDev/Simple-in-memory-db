const { createColumns } = require("../utils/table");
const Table = require("./Table");
class DB {
  constructor() {
    this.tables = new Map();
  }
  createTable(tableName, columnName) {
    let columns;
    columns = createColumns(columnName, new Table());
    this.tables.set(tableName, columns);
  }
  getTable(tableName) {
    return this.tables.has(tableName) ? this.tables.get(tableName) : null;
  }
}

module.exports = DB;
