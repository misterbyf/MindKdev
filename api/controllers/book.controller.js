const Book = require("../model/book.model");

exports.create = async (req, res) => {
  if (!req.body.title) {
    return res.status(400).send({
      message: "Please enter book title.",
    });
  };

  const book = new Book({
    title: req.body.title,
    author: req.body.author || "Default",
  });

  await book.save()
    .then((oBook) => {
      res.send(oBook);
    }).catch((err) => {
      res.status(500).send({
        message: err.message || "Something wrong with saving data.",
      });
    });
};

exports.getAll = async (req, res) => {
  await Book.find()
    .then((oBook) => {
      res.send(oBook);
    }).catch(err => {
      res.status(500).send({
        message: err.message || "Something wrong with get all books",
      })
    })
}

exports.getById = async (req, res) => {
  Book.findById(req.params.bookId)
    .then((oBook) => {
      if (oBook) {
        res.send(oBook);
      }
      return res.status(404).send({
        message: "Book not exist with id " + req.params.bookId,
      });
    }).catch(err => {
      if (err.kind === "ObjectId") {
        return res.status(404).send({
          message: "Book not exist with id " + req.params.bookId
        });
      }
      return res.status(500).send({
        message: "Error retrieving book with id " + req.params.bookId
      });
    });
}


exports.update = async (req, res) => {
  if (!req.body.title) {
    return res.status(400).send({
      message: "Please enter book title."
    });
  }

  await Book.findByIdAndUpdate(req.params.bookId, {
    title: req.body.title,
    author: req.body.author || "Default"
  }, { new: true })
    .then((oBook) => {
      if (oBook) {
        res.send(oBook);
      }
      return res.status(404).send({
        message: "Book does not exist with bookId " + req.params.bookId
      });

    }).catch((err) => {
      if (err.kind === "ObjectId") {
        return res.status(404).send({
          message: "Book does not exist with bookId " + req.params.bookId
        });
      }
      return res.status(500).send({
        message: "Some error occurred while retrieving the book with bookId" + req.params.bookId
      });
    });
};

exports.delete = async (req, res) => {
  await Book.findByIdAndRemove(req.params.bookId)
    .then((oBook) => {
      if (oBook) {
        res.send({ message: "Book has been deleted successfully!" });
      }
      return res.status(404).send({
        message: "Book not exist with bookId" + req.params.bookId
      });
    }).catch((err) => {
      if (err.kind === 'ObjectId' || err.name === 'NotFound') {
        return res.status(404).send({
          message: "Book not exist with bookId" + req.params.bookId
        });
      }
      return res.status(500).send({
        message: "Some error occurred while deleting the book with bookId" + req.params.bookId
      });
    });
};
