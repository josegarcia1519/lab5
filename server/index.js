const express = require("express"); 
const cors = require("cors");

const app = express();


app.use(cors());

app.use(express.json()); // When we want to be able to accept JSON.

app.get("/api/compliment", (req, res) => {
  const compliments = ["Gee, you're a smart cookie!",
					 "Cool shirt!",
					 "Your Javascript skills are stellar.",
  ];
// choose random compliment
let randomIndex = Math.floor(Math.random() * compliments.length);
let randomCompliment = compliments[randomIndex];
// choose random cookie


res.status(200).send(randomCompliment);
});
app.get("/api/fortune", (req, res) => {
  const fortunes = ["A beautiful, smart, and loving person will be coming into your life",
  "A dubious friend may be an enemy in camouflage",
  "A faithful friend is a strong defense",
];

//chose random fortune
let randomId = Math.floor(Math.random() * fortunes.length);
let randomFortune = fortunes[randomId];

res.status(200).send(randomFortune);


});

let items = ['banana']
app.get('/api/list', (req, res)=>{ //definign endpoint
  
res.status(200).send(items)

})   //turn into string


app.listen(4000, () => console.log("Server running on 4000"));
