const mongoose = require("mongoose");

const url =
  "mongodb+srv://bisentejas:2O7kosJqn3Rt0Pwa@tejasapi.eezknyj.mongodb.net/TejasApi?retryWrites=true&w=majority";

const connectDB = async () => {
    // console.log("DB Connected");
  return mongoose.connect(url, {
    useNewUrlParser: true,
    useUnifiedTopology: true
  });
};

module.exports = connectDB;
