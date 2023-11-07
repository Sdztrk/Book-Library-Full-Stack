require('express-async-errors');
const Books = require("../modals/Book")


//getting all books
exports.getBooks = async(req, res)=>{
    const books = await Books.findAndCountAll()
    res.status(200).json({
        error: false,
        result:books
    })
}

//creating  new book
exports.postBook = async(req, res)=>{
    const newBook = await Books.create(req.body)
    res.status(201).json({
        error: false, 
        message:"Book created", 
        result: newBook,
    })
}

//getting book with id
exports.getBookById = async (req, res) => {
    const book = await Books.findByPk(req.params.id);
    res.status(200).json({
        error:false,
        message:`Book with id ${req.params.id} is fetched`,
        result:book,
    })
}

// updating a book with id
exports.updateBook = async (req, res) => {
    const isUpdated = await Books.update(req.body, {where: {id: req.params.id}})
    const book = await Books.findByPk(req.params.id)
    res.status(202).json({
        error:false,
        message:`Book with id ${req.params.id} is updated`,
        isUpdated:Boolean(isUpdated[0]),
        result:book,
    })
}

//deleting a book
exports.deleteBook = async (req, res) => {
    const isDeleted = await Books.destroy({where: {id:req.params.id}});
    if (!isDeleted) throw new Error ("Task not found");
    res.status(204).json({
        error:false,
        message:`Book with id ${req.params.id} is deleted`,
        result: Boolean(isDeleted)
    }).send("deleted")
}