const express = require("express");

const Book = require("../entities/Book");

const bookRouter = express.Router();

//route get all contacts
//==>> http://localhost:8000/Book/getall
bookRouter.get("/getall", async (req, res) => {
  try {
    const books = await Book.find();
    res.status(200).json(books);
  } catch (err) {
    console.log(err);
    res.send("you have a problem");
  }
});

//route get all contacts
//==>> http://localhost:8000/Book/getone
bookRouter.get("/getone/:id", async (req, res) => {
  try {
    const book = await Book.findOne(req.params.id);
    res.status(200).json(book);
  } catch (err) {
    console.log(err);
    res.send("you have a problem");
  }
});

//post or add Book
//==>> http://localhost:8000/Book/addBook
bookRouter.post("/addBook", async (req, res) => {
  try {
    const addBook = new Book(req.body);
    await addBook.save();
    res.status(200).json({ msg: "Book added successfully", addBook });
  } catch (err) {
    console.log(err);
    res.send("you have a problem");
  }
});

//update Book
//==>> http://localhost:8000/Book/update/:id
bookRouter.put("/update/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const updateBook = await Book.findByIdAndUpdate(id, {
      $set: { ...req.body },
    });
    res.status(200).json({ msg: "Book updated successfully" });
  } catch (err) {
    console.log(err);
    res.send("you have a problem");
  }
});

//delete Book
//==>> http://localhost:8000/Book/delete/:id
bookRouter.delete("/delete/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const deleteBook = await Book.findByIdAndDelete(id);
    res.status(200).json({ msg: "Book deleted successfully" });
  } catch (err) {
    console.log(err);
    res.send("you have a problem");
  }
});

module.exports = bookRouter;
