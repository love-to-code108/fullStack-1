import express from "express"
import "dotenv/config"

const app = express();
const port = process.env.PORT;

// RESPONDING TO GET REQUEST
const jokes = [

    {
      "joke": "Who invented fractions? Henry the 1/8"
    },
    {
      "joke": "Why did the chicken cross the road naked? A: Because chickens don't wear clothes."
    },
    {
      "joke": "I just bought a Bonnie Tyler sat-nav. It keeps telling me to turn around, and every now and then it falls apart."
    },
    {
      "joke": "WHAT is Bruce Lee's favorite drink? WAH TAHH!!!!"
    },
    {
      "joke": "Did you hear about the corduroy pillow? You didn't hear? It made headlines!"
    },
    {
      "joke": "How did the Pillsbury Dough Boy Die? A Yeast Infection"
    },
    {
      "joke": "A blind man walks into a bar. And a table. And a door. And a staircase. I don't think hes alright now."
    },
    {
      "joke": "What's a difference between a teacher and a train? The teacher tells you to spit you gum out. The train says, \"Chew, chew, chew!\""
    },
    {
      "joke": "What's the best way to get a hold of Vin Diesel? IM Groot."
    },
    {
      "joke": "What do you call shaving a crazy sheep? Shear madness."
    }
  ];



// const joke = {
//     "joke": "Who invented fractions? Henry the 1/8"
// }



app.get("/api", (req,res) => {
    res.send(jokes)
})



app.get("/", (req, res) => {
    res.send("<h1>Hello World</h1>");
})


// LISTENING 
app.listen(port, (req, res) => {
    console.log("Server started on port", process.env.PORT);
})