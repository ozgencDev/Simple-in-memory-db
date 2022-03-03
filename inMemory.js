const DB = require("./members/DB");

const test = new DB();
test.createTable("users", {
  id: "int",
  name: "string",
});

let table = test.getTable("users");
table.insertRecords({
  id: 2,
  name: "John",
});
table.insertRecords({
  id: 1,
  name: "arthur",
});
table.insertRecords({
  id: 3,
  name: "John",
});
console.log(table.getAllRecords());
console.log(table.filterRecords({ name: "John" }));
