const getBooksController = (req, res) => {
  console.log("hello from get req");

  res.send("Hello from get resquest");
};

const addBookController = (req, res) => {
  console.log("hello from post req");

  res.send("Hello from post resquest");
};

module.exports = {
  getBooksController,
  addBookController,
};