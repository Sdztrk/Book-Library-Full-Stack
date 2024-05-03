const { Sequelize } = require('sequelize');

const sequelize = new Sequelize({
  dialect: 'mysql',
  host: 'localhost',
});

const connectMySqlDB = async () => {
  try {
    await sequelize.sync();
    console.log("Connected to MySQL database");
  } catch (error) {
    console.error("Error connecting to MySQL database:", error);
  }
};

module.exports = { sequelize, connectMySqlDB };
