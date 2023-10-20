const { Favorite } = require("../DB_connection");

const postFav = async (req, res) => {
  try {
    const { id,name, origin, status, image, species, gender } = req.body;
    //validar datos
    await Favorite.create({
        id,
      name,
      origin,
      status,
      image,
      species,
      gender,
    });

    const allFav = await Favorite.findAll();
    //console.log(allFav)
    //si hay muchos usuario hay que relacionar las tablas
    //User.addFavorite(favs);
    res.status(200).json(allFav);

  } catch (err) {}
};

module.exports=postFav;