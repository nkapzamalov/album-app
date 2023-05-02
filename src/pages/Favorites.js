import { useSelector, useDispatch } from "react-redux";
import { removeFavorite } from "../redux/favoritesSlice";
import FavoritesGrid from "../components/FavoritesGrid";
import { Link } from "react-router-dom";
import Header from "../components/Header";

const FavoritesPage = () => {
  const favorites = useSelector((state) => state.favorites.favorites);
  const dispatch = useDispatch();

  const removeFavoriteHandler = (favoriteId) => {
    dispatch(removeFavorite(favoriteId));
  };

  return (
    <>
      <Header />
      <div className="container mx-auto my-4">
        {
          favorites.length === 0 ? (
            <div className="flex flex-col items-center justify-center h-64">
              <p className="text-gray-500 text-2xl font-medium mb-4">No favorite photos added yet.</p>
              <Link to="/" className="bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow">Add Favorites</Link>
            </div>
          ) : (
            <FavoritesGrid
              favorites={favorites}
              removeFavoriteHandler={removeFavoriteHandler}
            />
          )}
      </div>
    </>
  );
};

export default FavoritesPage;