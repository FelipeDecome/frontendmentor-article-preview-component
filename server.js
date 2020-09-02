import express from "express";

const app = express();
const PORT = process.env.PORT || 3333;

app.use(express.static("public"));

app.get("/", (req, res) => {
  res.sendFile("./public/index.html");
});

try {
  app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}`);
  });
} catch (e) {
  console.log(e);
}
