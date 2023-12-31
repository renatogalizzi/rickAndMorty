const axios = require("axios");

//const URL = "https://rickandmortyapi.com/api/character";

const { URL } = process.env; // ====>DOTENV VARIABLES DE ENTORNO
//                                 ASYNC AWAIT

const getCharById = async (req, res) => {
  let idC = req.params.id;
  try {
    const data = await axios.get(`${URL}/${idC}`);
    const { id, name, gender, species, origin, image, status } = data.data;
    res.status(200).json({ id, name, gender, species, origin, image, status });
  } catch (error) {
    res.status(500).send(error.message);
  }
};

//                                   PROMESAS
// const getCharById = (req,res)=>{
//     const { id } = req.params;
// axios.get(`${URL}/${id}`)
//      .then((response)=> {
//         const {id,name,gender,species,origin,image,status} = response.data;
//         res.status(200)
//             .json({id,name,gender,species,origin,image,status})
//      })
//      .catch((error) =>{
//         //console.log(error)
//          res.status(500)
//             .send(error.message)
//      } );

// }

module.exports = getCharById;
// ****************************************************************************************//
//WEB SERVER
// const axios = require("axios");

// const getCharById = (res,id) => {
// axios
//     .get(`https://rickandmortyapi.com/api/character/${id}`)
//     .then((response)=> {
//         const {id,name,gender,species,origin,image,status} = response.data;
//     res.writeHead(200, {"Content-Type" : "application/json"})
//         .end(JSON.stringify({id,name,gender,species,origin,image,status}))
//     })
//     .catch((error) => {
//         res.writeHead(500,{"Content-Type" : "text/plain"})
//             .end(error.message)
//     })

// }

// module.exports = getCharById ;
