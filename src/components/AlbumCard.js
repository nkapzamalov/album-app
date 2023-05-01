import { Link } from "react-router-dom";

const AlbumCard = ({ album }) => {
  return (
    <Link to={`photos/by/album/${album.id}`}>
      <div className="bg-white shadow-md rounded-md p-4 transition duration-300 transform hover:scale-105 cursor-pointer">
        <div className="flex justify-center items-center">
        </div>
        <h3 className="text-xl font-semibold mt-4 text-center">{album.name}</h3>
      </div>
    </Link>
  );
};

export default AlbumCard;
