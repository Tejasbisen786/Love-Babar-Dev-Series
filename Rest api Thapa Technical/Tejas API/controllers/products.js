const { json } = require("body-parser");
const Product = require("../models/product");
const product = require("../models/product");

const getAllProduct = async (req, res) => {
  const { company, name, feature,sort } = req.query;

  const queryObject = {};
  if (company) {
    queryObject.company = company;
  }
  if (name) {
    queryObject.name = { $regex: name, $options: "i" };
  }

  if (feature) {
    queryObject.feature = feature;
  }

 

  const myData = await Product.find(queryObject);

  res.status(200).json({ myData });
};

const getAllProductTesting = async (req, res) => {

  
  const myData = await Product.find(req.query).sort("price"); 


  res.status(200).json({ myData });
};

module.exports = { getAllProduct, getAllProductTesting };
