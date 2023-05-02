import { useEffect, useState } from "react";
import { RouterProvider } from "react-router-dom";
import createAppRouter from "./routes";
import Loader from "./components/Loader";


export default function App() {
  const [photos, setPhotos] = useState([]);
  const [albums, setAlbums] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchPhotos = async () => {
      try {
        const response = await fetch("https://jsonplaceholder.typicode.com/photos");
        const photos = await response.json();

        let albums = [];
        photos.forEach((photo) => {
          if (!albums.some((album) => album.id === photo.albumId)) {
            albums.push({
              id: photo.albumId,
              name: `Album ${photo.albumId}`,
            });
          }
        });

        setPhotos(photos);
        setAlbums(albums);
      } catch (error) {
        console.error(error);
      } finally {
        setIsLoading(false);
      }
    };
    fetchPhotos();
  }, []);



  const router = createAppRouter(albums, photos)

  return (
    <div className="container mx-auto p-4">
      {isLoading ?
        <Loader /> :
        < RouterProvider router={router} />
      }
    </div>
  );
}

