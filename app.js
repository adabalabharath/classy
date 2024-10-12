const express = require("express");
const connectDB = require("./db/database");
const authRouter = require("./routes/auth");

const app = express();
app.use(express.json())



app.use('/',authRouter)



connectDB()
  .then(() => {console.log("db connected successfully");
    app.listen(7777,()=>{console.log('listening port 7777')})
  })
  .catch((error) => console.log(error));
