// Connecting with backend using express

const express = require("express");
const app = express();
const products_routes = require("./routes/products");

const PORT = process.env.PORT || 5000;
app.get("/", (req, res) => {
  res.send("Hii i'm live");
});

// middleware or set app
app.use("/api/products", products_routes);

const start = async () => {
  try {
    app.listen(PORT, () => {
      console.log(`${PORT} Yes, now i'm connected guys`);
    });
  } catch (eror) {
    console.log(eror);
  }
};
start();
