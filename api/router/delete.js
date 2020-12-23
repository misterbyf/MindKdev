const { Router } = require("express");
const books = require("../controllers/book.controller");

const router = Router();

router.delete("/books/:bookId", books.delete);

module.exports = router;