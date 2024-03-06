import express from "express"
import "dotenv/config"

const app = express();
const port = process.env.PORT;

// RESPONDING TO GET REQUEST
app.get("/",(req,res) => {
    res.send("<h1>Hello World</h1>");
})


// LISTENING 
app.listen(port , (req , res) =>{
    console.log("Server started on port",process.env.PORT);
} )