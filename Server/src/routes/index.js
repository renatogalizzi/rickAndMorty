const express = require("express");
const getCharById = require("../controllers/getCharById");
//const { postFav, deleteFav } = require("../controllers/handleFavorites");
//const loginServer = require("../controllers/login");
const postUser = require("../controllers/postUser");
const postFav = require("../controllers/postFav");
const login = require("../controllers/login");
const deleteFav = require("../controllers/deleteFav");

const routerRyM = express.Router();

routerRyM.post("/login", postUser);
routerRyM.get("/login", login);
routerRyM.post("/fav", postFav);
routerRyM.delete("/fav/:id", deleteFav);
routerRyM.get("/character/:id", getCharById);

//                         SIN BBDD
// routerRyM.get("/character/:id", (req, res) => {
//   getCharById(req, res);
// });

// routerRyM.get("/login", (req, res) => {
//   loginServer(req, res);
// });

// routerRyM.post("/fav", (req, res) => {
//   postFav(req, res);
// });

// routerRyM.delete("/fav/:id", (req, res) => {
//   deleteFav(req, res);
// });

module.exports = routerRyM;
