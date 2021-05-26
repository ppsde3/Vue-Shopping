const fs=require('fs');
const bodyParser = require('body-parser');
const express=require('express');
const cors = require("cors");
const db = require("./models/index");
const User = require("./models/userModel");
const app=express();

var corsOptions = {
    origin: "http://localhost:8080"
  };
  app.use(cors(corsOptions));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));

const pb = require("./models");
const Role = pb.role;

db.sequelize.sync({force:true}).then(()=>{
    console.log("Database is Ready");
    initial();
});

function initial() {
    Role.create({
      id: 1,
      name: "user"
    });
   
    Role.create({
      id: 2,
      name: "admin"
    });
  }

app.use((req,res,next)=>{
  res.header(
    "Access-Control-Allow-Headers",
    "x-access-token, Origin, Content-Type, Accept"
  );
    next();
});


require("./routes/shoppingRoutes")(app);
require("./routes/cartRoutes")(app);
require("./routes/authRoutes")(app);
require("./routes/userRoutes")(app);

app.listen(3000,()=>{
       console.log("Server is running on port 3000");
  });
