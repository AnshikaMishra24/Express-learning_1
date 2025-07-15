const express = require("express");
const connectDB = require("./db");



const booksRouter = require("./routes/books");
connectDB()

const app = express();

const PORT = 3001;

// books  routes
app.use("/api/books", booksRouter);

app.listen(PORT, () => console.log(`listening on port ${PORT}`));