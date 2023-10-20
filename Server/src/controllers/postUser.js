const { User } = require("../DB_connection");

const postUser = async (req,res)=>{
try{
    const {email,password} = req.body;
    if (!email || !password){
        res.status(400).json("Faltan datos")
}
const [userCreated] = await User.findOrCreate({where:{email,password}})

    return res.status(200).json(userCreated);

}catch(err){res.status(500).json(err.message)};

}

module.exports=postUser;