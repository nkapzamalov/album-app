import 'photoswipe/dist/photoswipe.css'
import { Gallery, Item } from 'react-photoswipe-gallery'
import PhotoCard from "./PhotoCard";


const FavoritesGrid = ({ favorites, removeFavoriteHandler }) => {

  const renderFavorites = () => {

    return favorites.map((photo) => {
      return (
        <Item
          key={photo.id}
          original={photo.url}
          thumbnail={photo.thumbnailUrl}
          width="600"
          height="600"
        >
          {({ ref, open }) => (
            <div ref={ref}>
              <PhotoCard
                photo={photo}
                isFavorite={true}
                toggleFavorite={() => removeFavoriteHandler(photo.id)}
                onClick={open}
              />
            </div>
          )}
        </Item>
      );
    });
  };

  return (
    <Gallery>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {renderFavorites()}
      </div>
    </Gallery>
  );
};

export default FavoritesGrid;