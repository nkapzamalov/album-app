import { useEffect, useState } from "react";
import ReactLoading from "react-loading";
import AlbumGrid from "./components/AlbumGrid";
import PhotosPage from "../src/pages/photos/by/album/id";
import NotFound from "./pages/NotFound";
import Favorites from "./pages/Favorites"
import { RouterProvider, createBrowserRouter } from "react-router-dom";


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



  const router = createBrowserRouter([
    {
      path: "/",
      element: <AlbumGrid albums={albums} />,
    },
    {
      path: `/photos/by/album/:albumId`,
      element: <PhotosPage photos={photos} />,
    },
    {
      path: "/favorites",
      element: <Favorites />,
    },
    {
      path: "*",
      element: <NotFound />,
    },

  ]);

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

