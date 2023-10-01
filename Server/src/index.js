require("dotenv").config();
const express = require("express");
const routerRyM = require("./routes/index");

const server = express();
const { PORT } = process.env;
server.use(express.json());

server.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Credentials", "true");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  res.header("Access-Control-Allow-Methods", "GET, POST, OPTIONS, PUT, DELETE");
  next();
});

server.use("/rickandmorty", routerRyM);

server.listen(PORT, () => {
  console.log("Server raised in port: " + PORT);
});

module.exports = server;
//********************************************************************************************************* */
//ESTO ERA CON WEB SERVER
// var fs = require("fs");
// var http = require("http");
// const getCharById = require("./controllers/getCharById");

// const PORT = 3001;

// const server = http.createServer((req,res)=>{
//     const {url} = req;

//     res.setHeader('Access-Control-Allow-Origin', '*');
//     console.log(`Server raised in port ${PORT}`);
//     let charID = url.split("/").pop();
//     url.includes("/rickandmorty/character") ? getCharById(res,charID) : res.end("Bad Route");

//     }).listen(PORT,"localhost");;
