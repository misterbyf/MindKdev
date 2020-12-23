const { Router } = require("express");
const books = require("../controllers/book.controller");

const router = Router();

router.post('/books', books.create);

module.exports = router;