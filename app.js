const express = require("express");
const mongoose = require("mongoose");
const routes = require('./routes/ContactRoutes');
const app = express();
const ejs=require('ejs');
const path=require('path');


mongoose.connect("mongodb://localhost:27017/ContactsDB");
mongoose.connection
  .once("open", () => {
    console.log("Connected to database");
  })
  .on("error", (err) => {
    console.log(err);
  });
app.use(express.json());

app.use(express.static(path.join(__dirname,'public'))); 
app.set('view engine', 'ejs'); 
app.set('views', path.join(__dirname, '/views'));

app.get('/', (req,res)=>{
    res.render('index');
})

app.use('/api', routes);

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
