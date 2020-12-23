const { Router } = require("express");
const books = require("../controllers/book.controller");

const router = Router();

router.get("/books/:bookId", books.getById);
router.get("/books", books.getAll);


module.exports = router;