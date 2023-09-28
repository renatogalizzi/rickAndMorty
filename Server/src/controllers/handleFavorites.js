let myFavorites = [];

const postFav = (req, res) => {
  const fav = req.body;
  myFavorites.push(fav);
  res.status(200).json(myFavorites);
};

const deleteFav = (req, res) => {
  const { id } = req.params;
  let filterFav = myFavorites.filter((fav) => (fav.id !== Number(id)));
  myFavorites = filterFav;
  res.status(200).json(myFavorites);
};

module.exports = { postFav, deleteFav };
