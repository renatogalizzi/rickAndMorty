const { User } = require("../DB_connection");
const bcrypt = require("bcryptjs");
const { encrypt,compare } = require("../helpers/handleBcrypt");
const postUser = async (req,res)=>{
try{
    const {email,password} = req.body;
    if (!email || !password){
        res.status(400).json("Faltan datos")
}
//HASH BCRYPT
const hashPass = await encrypt(password);
// console.log(hashPass);
const [userCreated] = await User.findOrCreate({where:{email,password: hashPass}})

    return res.status(200).json(userCreated);

}catch(err){res.status(500).json(err.message)};

}

module.exports=postUser;