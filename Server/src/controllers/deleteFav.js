const { Favorite } = require("../DB_connection");

const deleteFav = async (req, res) => {
  try {
    const { id } = req.params;
    await Favorite.destroy({ where: { id } });
    const favs = await Favorite.findAll();
    res.status(200).json(favs)
  } catch (err) {res.status(500).json(err.message)}
};


module.exports=deleteFav;