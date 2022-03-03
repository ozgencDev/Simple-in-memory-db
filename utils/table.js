function isValidType(columns, intOrNumber = "int") {
  if (intOrNumber !== "int") {
    for (const [key, value] of Object.entries(columns)) {
      if (typeof value === "string" || typeof value === intOrNumber) {
        continue;
      } else {
        throw new Error(`${key}: ${value} is not a valid type`);
      }
    }
    return true;
  } else {
    for (const [key, value] of Object.entries(columns)) {
      if (value === "string" || value === intOrNumber) {
        continue;
      } else {
        throw new Error(`${key}: ${value} is not a valid type`);
      }
    }
    return true;
  }
}

function createColumns(columns, table) {
  isValidType(columns);
  const columnsMap = table;
  for (const [key, value] of Object.entries(columns)) {
    let array;
    array = [];
    columnsMap.set(`${value} ${key}`, array);
  }
  return columnsMap;
}

function zip(...arr) {
  const zipped = [];
  arr.forEach((item, ind) => {
    item.forEach((i, index) => {
      if (!zipped[index]) {
        zipped[index] = [];
      }
      if (!zipped[index][ind]) {
        zipped[index][ind] = [];
      }
      zipped[index][ind] = i || "";
    });
  });
  return zipped;
}

const addData = (columnName, record, __that__) => {
  const MAX_STRING_LENGTH = 255;
  const MAX_INT_VALUE = 999;
  const MIN_INT_VALUE = -999;
  /* extracts column name from type colomn */
  let columnNameSliced = columnName.slice(columnName.indexOf(" ") + 1, columnName.length);
  if (columnName.includes("string")) {
    /* checks column type */
    if (__that__.has(columnName) && typeof record[columnNameSliced] === "string") {
      /*check value constrainsts  */
      record[columnNameSliced].length <= MAX_STRING_LENGTH
        ? __that__.get(columnName).push(record[columnNameSliced])
        : console.log(`${columnNameSliced} is too long`);
      /*check value constrainsts */
    } else {
      throw new Error(`${columnName} is not a valid type`);
    }
    /* checks column type */
  } else if (columnName.includes("int")) {
    if (__that__.has(columnName) && typeof record[columnNameSliced] === "number") {
      /*check value constrainsts */
      record[columnNameSliced] >= MIN_INT_VALUE && record[columnNameSliced] <= MAX_INT_VALUE
        ? __that__.get(columnName).push(record[columnNameSliced])
        : console.log(`${columnNameSliced} is out of range`);
      /*check value constrainsts */
    } else {
      throw new Error(`${columnName} is not a valid type`);
    }
  }
};

module.exports = { createColumns, isValidType, zip, addData };
