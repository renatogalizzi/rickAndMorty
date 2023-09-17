const axios = require("axios");

const getCharById = (res,id) => {
axios
    .get(`https://rickandmortyapi.com/api/character/${id}`)
    .then((response)=> {
        const {id,name,gender,species,origin,image,status} = response.data;
    res.writeHead(200, {"Content-Type" : "application/json"})
        .end(JSON.stringify({id,name,gender,species,origin,image,status}))
    })
    .catch((error) => {
        res.writeHead(500,{"Content-Type" : "text/plain"})
            .end(error.message)
    })
    
}


module.exports = getCharById ;