const { Sequelize } = require("sequelize");

const sequelize = new Sequelize("userstopupstreaming", "root", "", {
  host: "localhost",
  dialect: "mysql",
});

module.exports = { sequelize };
