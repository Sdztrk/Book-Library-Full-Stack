//imports
const express = require("express")
const app = express()
require("colors")
require("dotenv").config()
const {connectDB} = require("./mySqlConnection")
const {connectMySqlDB} = require("./mySqlConnection")
 const bookRouter = require("./routes/book")
const { errorHandler } = require("./middlewares/errorHandler")
 const cors = require('cors')

//connection to DB
// sequelize.sync().then(() => console.log(`connected to db`.red.underline))
// connectDB()
connectMySqlDB()

// Parse request 
app.use(express.json())

//usign middlewares
app.use(errorHandler)
app.use(cors())


//using router
 app.use("/api/v1",bookRouter)


const PORT = process.env.PORT || 5001;

app.listen(PORT, () => {
    console.log(`App is running on port ${PORT}`.blue.underline)
})
