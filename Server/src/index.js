var fs = require("fs");
var http = require("http");
const getCharById = require("./controllers/getCharById");

const PORT = 3001;

module.exports = http.createServer((req,res)=>{
    const {url} = req;
    res.setHeader('Access-Control-Allow-Origin', '*');
    console.log(`Server raised in port ${PORT}`);
    //     let getId="";
    // if ( url.includes("/rickandmorty/character")){
    //     let barrini = url.lastIndexOf("/") + 1;
    //     let getId="";
    //     for (let i=barrini;i<url.length;i++){
    //         getId= getId + url[i];
    //     }
    //     if (getId < 6){
    //     let character = dataS.filter(char => char.id === Number(getId))
    //     console.log(character[0])
    //     res.end(JSON.stringify(character))
    //     return;
    //     } 

    //     res.writeHead(404,{"Content-Type":"text/plain"})
    //     res.end("No Existe personaje con ese ID")

    // }
    let charID = url.split("/").pop();
    if (url.includes("/rickandmorty/character")){
        getCharById(res,charID)
    }

}).listen(PORT,"localhost");;