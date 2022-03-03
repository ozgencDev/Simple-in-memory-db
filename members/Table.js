const { isValidType, zip, addData } = require("../utils/table");
class Table extends Map {
  constructor() {
    super();
  }

  insertRecords(record) {
    isValidType(record, "number");
    this.forEach((value, columnName) => {
      addData(columnName, record, this);
    });
  }

  getAllRecords() {
    let columns;
    columns = [];
    this.forEach((value, columnName) => {
      columns.push(value);
    });

    return zip(...columns);
  }

  filterRecords(value) {
    const recordValue = Object.values(value);
    const allRecord = this.getAllRecords();
    const filtered = allRecord.filter((record, index) => {
      return recordValue.every((value) => {
        return record.includes(value);
      });
    });

    return filtered;
  }
}

module.exports = Table;
