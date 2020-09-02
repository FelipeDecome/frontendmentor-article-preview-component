import express from "express";

const app = express();
const PORT = process.env.PORT || 3333;

app.use(express.static("public"));

app.get("/", (req, res) => {
  res.sendFile("./public/index.html");
});

app.listen(PORT, () => {
  console.log(`server listening on port: ${PORT}`);
});
