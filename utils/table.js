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
  if (isValidType(columns)) {
    const columnsMap = table;
    for (const [key, value] of Object.entries(columns)) {
      let array;
      array = [];
      columnsMap.set(`${value} ${key}`, array);
    }
    return columnsMap;
  }
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

module.exports = { createColumns, isValidType, zip };
