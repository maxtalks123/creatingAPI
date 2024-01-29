//write endpoint that listens for request.body to have two numbers and server adds them together and responds with them.
import express from "express";

const app = express();
app.listen(3000, () => {
  console.log("server is listening on port 3000");
});

app.get("/messages", (req, res) => {
  res.json({
    object: { message: "hello, world!", age: 33, phone: 7823, name: "max" },
  });
});
app.use(express.json());
app.post("/messages", (req, res) => {
  res.json({ message: "Hello, world!" });
});

app.listen(4000, (reqNumber) => {
  console.log("listening for number");
});

app.get("/numbers", (req, res) => {
  res.json({
    object: {
      message: "The numbers are",
      number1: 2,
      number2: 3,
    },
  });
});

app.post("/numbers", (req, res, next) => {
  console.log(req.body);
  res.json(req.body);
});
