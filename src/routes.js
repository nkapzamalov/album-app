import { createBrowserRouter } from "react-router-dom";
import AlbumGrid from "./components/AlbumGrid";
import PhotosPage from "../src/pages/photos/by/album/id";
import NotFound from "./pages/NotFound";
import Favorites from "./pages/Favorites";

export default function createAppRouter(albums, photos) {
  return createBrowserRouter([
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
}

