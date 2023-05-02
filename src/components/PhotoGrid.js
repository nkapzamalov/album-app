import 'photoswipe/dist/photoswipe.css'
import PhotoCard from "./PhotoCard";
import { useSelector } from "react-redux";
import { Gallery, Item } from 'react-photoswipe-gallery'

export const EmptyAlbum = () => {
  return (
    <div className="flex items-center justify-center text-black space-y-2">
      <p className="text-2xl font-bold">The album is empty.</p>
    </div>
  );
};

export const PhotoGrid = ({ photos, toggleFavorite }) => {
  const favorites = useSelector((state) => state.favorites.favorites);

  return (
    <Gallery>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {photos.map((photo) => (
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
                  isFavorite={favorites.some((favorite) => favorite.id === photo.id)}
                  toggleFavorite={() => toggleFavorite(photo)}
                  onClick={open}
                />
              </div>
            )}
          </Item>
        ))}
      </div>
    </Gallery>
  );
};