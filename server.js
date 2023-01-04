require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");   
const cors = require("cors");
const cookieParser = require("cookie-parser");

const app = express();
app.use(express.json());
app.use(cors());
app.use(cookieParser());


// Routes
app.use('/api',require('./routes/authRouter'))
app.use('/api',require('./routes/userRouter'))
app.use('/api',require('./routes/postRouter'))
app.use('/api',require('./routes/commentRouter'))


const URI = process.env.MONGODB_URL
mongoose.connect(URI, err => {
    if(err) throw err;
    console.log('connected to mongodb')
})

const port = process.env.PORT || 5000;
app.listen(port,() => {
    console.log('server listening on port',port)
})