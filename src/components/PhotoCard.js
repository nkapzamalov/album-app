import { HeartIcon } from '@heroicons/react/24/solid';

const PhotoCard = ({ photo, isFavorite, toggleFavorite }) => {
  return (
    <div className="bg-white shadow-md rounded-md p-4 transition duration-300 transform hover:scale-105 relative">
      <div className='flex justify-center'>
        <button onClick={toggleFavorite} className="border-red-400 absolute top-3 right-3 focus:outline-none">
          {isFavorite ? (
            <HeartIcon className="h-8 w-8 text-red-500" />
          ) : (
            <HeartIcon className="h-8 w-8 text-gray-500" />
          )}
        </button>
        <img
          src={photo.thumbnailUrl}
          alt={photo.title}
          className="w-4/6 object-contain object-center rounded-md"
        />
      </div>
      <p className="text-base font-normal mt-4 text-center">{photo.title}</p>
    </div>
  );
};

export default PhotoCard;



