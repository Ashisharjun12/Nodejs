const mongoose = require("mongoose");

async function connectdb(url) {
 return mongoose
    .connect(url)
    .then(() => console.log("database connected succesfully"))
    .catch((err) => console.log(`mongodb connection failed ${err}`));
}

module.exports = {
    connectdb
}