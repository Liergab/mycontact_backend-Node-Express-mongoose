const mongoose = require("mongoose");

async function connect () {
    await mongoose.connect('mongodb://localhost:27017/myContact');
    console.log("connected To Server")
}

module.exports = connect