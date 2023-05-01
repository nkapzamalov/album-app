import PhotoCard from "./PhotoCard";

const FavoritesGrid = ({ favorites, removeFavoriteHandler }) => {

  const renderFavorites = () => {
    return favorites.map((photo) => {
      return (
        <PhotoCard
          key={photo.id}
          photo={photo}
          isFavorite={true}
          toggleFavorite={() => removeFavoriteHandler(photo.id)}
        />
      );
    });
  };

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
      {renderFavorites()}
    </div>
  );
};

export default FavoritesGrid;