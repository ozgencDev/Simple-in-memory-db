const DB = require("./members/DB");

const test = new DB();
test.createTable("users", {
  id: "int",
  name: "string",
});
test.createTable("posts", {
  id: "int",
  title: "string",
});

let table = test.getTable("users");
let table2 = test.getTable("posts");
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
console.log(table, table2);
console.log(table.getAllRecords(), "GET ALL RECORDS");
console.log(table.filterRecords({ name: "John", id: 2 }), "FILTER RECORDS");
