const { json } = require("body-parser");
const Product = require("../models/product");
const product = require("../models/product");

const getAllProduct = async (req, res) => {

  const {company}=req.query

const queryObject={}
if(company)
{
  queryObject.company=company;
}

  const myData = await Product.find(queryObject);

  res.status(200).json({ myData });
};

const getAllProductTesting = async (req, res) => {




  const myData = await Product.find(req.query);

  res.status(200).json({ myData});
};

module.exports = { getAllProduct, getAllProductTesting };
