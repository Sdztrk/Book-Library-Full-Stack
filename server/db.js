const {Sequelize} = require("sequelize")

const sequelize = new Sequelize(
    {
      dialect:"sqlite",
      host:"./dev.sqlite",
    }
  );





  const connectDB = async () => {
    // Synchronize
    sequelize.sync();
  
    await sequelize.authenticate();
    console.log("Connected to DB".yellow.underline);
  };
  
  module.exports = { sequelize, connectDB };