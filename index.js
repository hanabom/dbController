const { dbAction, dbEnd } = require("./db");

exports.handler = async (event) => {
  console.log("event:", event);

  const sql = "SELECT * FROM products"

  let output = "";
  dbAction(sql, (results) => output = results);
  dbEnd();

  console.log("output", output)
  // Response
  const response = {
    statusCode: 200,
    body: JSON.stringify(output),
  };
  return response;
};
