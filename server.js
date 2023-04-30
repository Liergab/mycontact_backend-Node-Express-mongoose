const express = require("express");
const bodyParser = require("body-parser");
const dotenv = require("dotenv").config();
const connect = require("./database/db")
const contactRouter = require("./routes/contactRoutes.js");
const errorHandler = require("./middleware/errorHandler.js");
const app = express();
const path = require("path");
const connectDb = require("./Config/dbConnection");
connectDb();

app.use(express.json());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));
app.use(errorHandler);

app.set("view engine","ejs")
app.set("views",path.join(__dirname,"/views"));

const PORT = process.env.PORT || 3001;



app.use(contactRouter);


// connect().then(() => {
    app.listen(PORT, () => {
        console.log(`Listening in PORT: http://localhost:${PORT}`)
    });
// })
