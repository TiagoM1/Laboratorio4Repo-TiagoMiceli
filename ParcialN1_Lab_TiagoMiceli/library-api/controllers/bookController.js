const Book = require("../models/Book");
const Author = require("../models/Author");




exports.getAll = async (req, res) => {
  const books = await Book.find();
  res.json(books);
};

exports.getById = async (req, res) => {
  const book = await Book.findById(req.params.id);
  book ? res.json(book) : res.status(404).json({ error: "Nor found :(" });
};



exports.create = async (req, res) => {
  const book = new Book(req.body);
  await book.save();
  res.status(201).json(book);
};

exports.update = async (req, res) => {
  const book = await Book.findByIdAndUpdate(req.params.id, req.body, { new: true });
  book ? res.json(book) : res.status(404).json({ error: "Nor found :(" });
};



exports.remove = async (req, res) => {
  const isAssigned = await Author.findOne({ libros: req.params.id });
  if (isAssigned) return res.status(400).json({ error: "Cant be deleted, asigned to an Author" });

  const book = await Book.findByIdAndDelete(req.params.id);
  book ? res.json({ msg: "Deleted :)" }) : res.status(404).json({ error: "Not found :(" });
};
