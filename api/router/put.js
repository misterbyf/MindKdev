const { Router } = require("express");
const books = require("../controllers/book.controller");

const router = Router();

router.put('/books/:bookId', books.update);

module.exports = router;