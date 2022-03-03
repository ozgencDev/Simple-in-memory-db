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
    if (this.tables.has(tableName)) {
      return this.tables.get(tableName);
    } else {
      return null;
    }
  }
}

module.exports = DB;
