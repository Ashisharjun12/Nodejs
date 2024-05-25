const mongoose = require("mongoose");

async function connection(url) {
  return mongoose
    .connect(url)
    .then(() => console.log("mongodb connected"))
    .catch((err) => console.log(`mongodb connection errr : ${err}`));
}

module.exports = { connection };
