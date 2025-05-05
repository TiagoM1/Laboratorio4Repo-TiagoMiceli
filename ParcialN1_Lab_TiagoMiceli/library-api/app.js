require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");

const bookRoutes = require("./routes/books");
const authorRoutes = require("./routes/authors");

const app = express();
app.use(express.json());

app.use("/books", bookRoutes);
app.use("/authors", authorRoutes);

const PORT = process.env.PORT || 3000;

mongoose.connect(`${process.env.MONGO_URI}${process.env.DB_NAME}`)
  .then(() => {
    console.log("MongoDB conected :)");
    app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
  })
  .catch((err) => console.error("Error whole connecting :(", err));
