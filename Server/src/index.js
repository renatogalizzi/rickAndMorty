let dataS = require("./utils/data");
var fs = require("fs");
var http = require("http");

const PORT = 3001;

module.exports = http.createServer((req,res)=>{
    const {url} = req;
    res.setHeader('Access-Control-Allow-Origin', '*');
    console.log(`Server raised in port ${PORT}`);
    if ( url.includes("/rickandmorty/character")){
        let barrini = url.lastIndexOf("/") + 1;
        let getId="";
        for (let i=barrini;i<url.length;i++){
            getId= getId + url[i];
        }
        // fs.readFile("./utils/data","utf-8",(err,data)=>{
        //     if(err){
        //         res.writeHead(404,{"Content-Type":"text/plain"});
        //         res.end("Character not found")
        //     } else {
        //     //let char = data.filter(char=> char.id === Number(getId))
        //         //JSON.stringify(char);
        //         res.writeHead(200,{"Content-Type":"application/json"});
        //         res.end(JSON.stringify(data));
        //     }

        // })
        if (getId < 6){
        let character = dataS.filter(char => char.id === Number(getId))
        console.log(character[0])
        res.end(JSON.stringify(character))
        return;
        } 

        res.writeHead(404,{"Content-Type":"text/plain"})
        res.end("No Existe personaje con ese ID")

    }

}).listen(PORT,"localhost");;