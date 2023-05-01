const SearchBar = ({ searchValue, setSearchValue }) => {

  const handleInputChange = (event) => {
    setSearchValue(event.target.value);
  };

  return (
    <div className="my-6 flex justify-center drop-shadow-lg">
      <input
        type="text"
        placeholder="Search albums..."
        value={searchValue}
        onChange={handleInputChange}
        className="w-1/2 px-4 py-2 rounded-md border border-gray-300 outline-none"
      />
    </div>
  );
};

export default SearchBar;