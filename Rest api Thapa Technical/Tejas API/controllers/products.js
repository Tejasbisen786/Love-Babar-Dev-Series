const { json } = require("body-parser");

const getAllProduct = async (req, res) => {
  res.status(200). json({ msg: "im getallProducts" });
};

const getAllProductTesting = async (req, res) => {
  res.status(200). json({ msg: "im getallProductsTesting" });
};




module.exports = { getAllProduct, getAllProductTesting};
