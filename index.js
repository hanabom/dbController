const { dbAction, dbEnd } = require("./db");

exports.handler = async (event) => {
  console.log("event:", event);
  console.log("event Body:", event.body);
  let sql = "SELECT * FROM products"

  return dbAction(sql)
        .then((res) => ({
          statusCode: 200,
          body: JSON.stringify(res)
        }));
};
