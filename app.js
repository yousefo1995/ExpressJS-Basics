const express = require("express");
const app = express();
const todos = require("./public/todos.json");
const port = 3000;

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});

app.get("/", (req, res) => {
  res.json({
    status: 200,
    data: todos,
    message: "Successful retrieval of todos",
  });
});

app.delete("/delete", (req, res) => {
  const randomIndex = Math.floor(Math.random() * todos.length);
  todos.splice(randomIndex, 1);
  if (todos.length === 0) {
    return res.status(404).send("no objects are available for deletion.");
  } else {
    return res.json({
      status: 204,
      data: todos,
      message: "Successful deletion of an item.",
    });
  }
});
app.use("/static", express.static("public"));
