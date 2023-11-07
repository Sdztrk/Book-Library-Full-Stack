const router = require("express").Router()
const books = require("../controllers/bookControllers")

router.route("/books")
.get(books.getBooks)
.post(books.postBook)

router.route("/books/:id").get(books.getBookById).put(books.updateBook).delete(books.deleteBook)

module.exports = router;