import React from 'react';
// import './SearchBar.css';

const SearchBar = ({ searchTerm, setSearchTerm }) => {
  return (
    <div className="search-bar">
      <input
        type="text"
        placeholder="Search by skill..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <button>Search</button>
    </div>
  );
};

export default SearchBar;