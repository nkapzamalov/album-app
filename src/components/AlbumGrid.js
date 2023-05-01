import { useState } from "react";
import AlbumCard from "./AlbumCard";
import SearchBar from "./SearchBar";
import Header from "./Header";

const AlbumGrid = ({ albums }) => {
  const [searchValue, setSearchValue] = useState("");

  const filteredAlbums = albums.filter((album) =>
    album.name.toLowerCase().includes(searchValue.toLowerCase())
  );

  return (
    <>
      <Header />
      <SearchBar searchValue={searchValue} setSearchValue={setSearchValue} />
      {filteredAlbums.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
          {filteredAlbums.map((album) => (
            <AlbumCard key={album.id} album={album} />
          ))}
        </div>
      ) : (
        <p className="text-black font-medium text-lg text-center mt-8">
          No albums found
        </p>
      )}
    </>
  );
};

export default AlbumGrid;