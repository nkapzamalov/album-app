import { useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { addFavorite, removeFavorite } from "../../../../redux/favoritesSlice";
import NotFound from "../../../NotFound";
import Header from "../../../../components/Header";
import { EmptyAlbum, PhotoGrid } from "../../../../components/PhotoGrid";

const PhotosPage = ({ photos }) => {
  const { albumId } = useParams();
  const dispatch = useDispatch();
  const favorites = useSelector((state) => state.favorites.favorites);

  if (isNaN(albumId)) {
    return <NotFound />;
  }

  const filteredPhotos = photos.filter((photo) => photo.albumId.toString() === albumId);

  const toggleFavorite = (photo) => {
    if (favorites.some((favorite) => favorite.id === photo.id)) {
      dispatch(removeFavorite(photo.id));
    } else {
      dispatch(addFavorite(photo));
    }
  };

  return (
    <>
      <Header />
      {filteredPhotos.length === 0 ? <EmptyAlbum /> : <PhotoGrid photos={filteredPhotos} favorites={favorites} toggleFavorite={toggleFavorite} />}
    </>
  );
};

export default PhotosPage;