import { useEffect, useState } from "react";
import ReactLoading from "react-loading";
import { RouterProvider } from "react-router-dom";
import createAppRouter from "./routes";


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
      {isLoading ? (
        <div className="flex justify-center items-center h-screen">
          <ReactLoading type="balls" color="#6B7280" height={32} width={32} />
        </div>
      ) : < RouterProvider router={router} />
      }
    </div>
  );
}

