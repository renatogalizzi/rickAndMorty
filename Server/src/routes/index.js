const express = require("express");
const getCharById = require("../controllers/getCharById");
const {postFav, deleteFav} = require("../controllers/handleFavorites");
const loginServer = require("../controllers/login");

const routerRyM = express.Router();

routerRyM.get("/character/:id", (req, res) => {
    //res.header("Access-Control-Allow-Origin", "*");
    getCharById(req, res);
  });
  
  routerRyM.get("/login", (req, res) => {
    //res.header("Access-Control-Allow-Origin", "*");
    loginServer(req, res);
  });
  
  routerRyM.post("/fav", (req, res) => {
    postFav(req, res);
  });

  routerRyM.delete("/fav/:id", (req, res) => {
    deleteFav(req,res);
  });


  module.exports = routerRyM;