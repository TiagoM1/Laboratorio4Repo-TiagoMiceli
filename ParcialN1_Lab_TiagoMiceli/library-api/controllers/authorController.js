const Author = require("../models/Author");
const Book = require("../models/Book");




exports.getAll = async (req, res) => {
  const authors = await Author.find().populate("libros");
  res.json(authors);
};

exports.getById = async (req, res) => {
  const author = await Author.findById(req.params.id).populate("libros");
  author ? res.json(author) : res.status(404).json({ error: "Not found :(" });
};



exports.create = async (req, res) => {
  if (!req.body.nombre) return res.status(400).json({ error: "Nombre requerido" });
  const author = new Author(req.body);
  await author.save();
  res.status(201).json(author);
};

exports.update = async (req, res) => {
  const author = await Author.findByIdAndUpdate(req.params.id, req.body, { new: true });
  author ? res.json(author) : res.status(404).json({ error: "Not found :(" });
};



exports.remove = async (req, res) => {
  const author = await Author.findByIdAndDelete(req.params.id);
  author ? res.json({ msg: "Deleted :)" }) : res.status(404).json({ error: "Not found :(" });
};

exports.addBook = async (req, res) => {
  const { id, bookId } = req.params;
  const author = await Author.findById(id);
  const book = await Book.findById(bookId);
  if (!author || !book) return res.status(404).json({ error: "Author or Book already exists :(" });

  if (!author.libros.includes(bookId)) {
    author.libros.push(bookId);
    await author.save();
  }
  res.json(author);
};
