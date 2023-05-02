import { Link } from 'react-router-dom';

function Header() {
  return (
    <div className="flex justify-around bg-white py-4 px-8 drop-shadow-lg mb-8">
      <Link to='/' className="text-black text-xl font-semibold">
        Albums
      </Link>
      <Link to='/favorites' className="text-black text-xl font-semibold">
        Favorites
      </Link>
    </div>
  );
}

export default Header;