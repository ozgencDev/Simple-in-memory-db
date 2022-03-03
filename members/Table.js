const { isValidType, zip } = require("../utils/table");
class Table extends Map {
  constructor() {
    super();
  }
  insertRecords(record) {
    isValidType(record, "number");
    this.forEach((value, columnName) => {
      let columnNameSliced = columnName.slice(
        columnName.indexOf(" ") + 1,
        columnName.length
      );
      if (columnName.includes("string")) {
        if (
          this.has(columnName) &&
          typeof record[columnNameSliced] === "string"
        ) {
          this.get(columnName).push(record[columnNameSliced]);
        } else {
          throw new Error(`${columnName} is not a valid type`);
        }
      } else if (columnName.includes("int")) {
        if (
          this.has(columnName) &&
          typeof record[columnNameSliced] === "number"
        ) {
          this.get(columnName).push(record[columnNameSliced]);
        } else {
          throw new Error(`${columnName} is not a valid type`);
        }
      }
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
    const recordKey = Object.keys(value);
    const recordValue = Object.values(value);
    let columnName;
    if (typeof recordValue[0] === "string") {
      columnName = `string ${recordKey[0]}`;
    } else if (typeof recordValue[0] === "number") {
      columnName = `int ${recordKey[0]}`;
    } else {
      throw new Error(`${recordKey[0]} is not a valid type`);
    }

    const filteredRecordsIndex = [];
    if (this.has(columnName)) {
      this.get(columnName).forEach((item, inx) => {
        if (item === recordValue[0]) {
          filteredRecordsIndex.push(inx);
        }
      });
    } else {
      throw new Error(`${columnName} is not a valid type`);
    }
    const filteredRecords = [];
    const allRecord = this.getAllRecords();
    filteredRecordsIndex.forEach((inx) => {
      filteredRecords.push(allRecord[inx]);
    });
    return filteredRecords;
  }
}

module.exports = Table;
