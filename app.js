const express = require("express");
const connectDB = require("./db/database");
const authRouter = require("./routes/auth");
const cors=require('cors')
const cookieParser=require('cookie-parser');
const bagRouter = require("./routes/bag");
const app = express();
app.use(express.json())

app.use(cors())
app.use(cookieParser());

app.use('/',authRouter)
app.use('/',bagRouter)


connectDB()
  .then(() => {console.log("db connected successfully");
    app.listen(7777,()=>{console.log('listening port 7777')})
  })
  .catch((error) => console.log(error));
