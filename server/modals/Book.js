const {sequelize} = require('../mySqlConnection');
const {DataTypes} = require('sequelize')

const Book = sequelize.define('books', {

    title:{
        type:DataTypes.STRING(180),
        allowNull:false
    },
    author:{
        type:DataTypes.STRING(80)
    },
    ISBN:{
        type:DataTypes.NUMBER, 
        allowNull:false, 
    }, 
    genre:{
        type: DataTypes.STRING, 
        allowNull: false, 
    },
    pubYear:{
        type:DataTypes.NUMBER,
        allowNull:false,
    }
})

module.exports = Book;
