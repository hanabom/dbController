const mysql = require("mysql");
const credConfig = require("./config");
const util = require('util');

const dbConn = mysql.createConnection({
  host: credConfig.dbHost,
  user: credConfig.dbUser,
  port: credConfig.dbPort,
  password: credConfig.dbPassword,
  database: "products",
});

const query = util.promisify(dbConn.query).bind(dbConn);

const dbAction = async (sql) => {
  try {
    const rows = await query(sql);
    return rows
  } finally {
    dbConn.end();
  }
}

module.exports = { dbAction };
