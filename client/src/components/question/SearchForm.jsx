import React from 'react';

const SearchForm = () => (
  <div id="searchForm">
    <form>
      <input
        id="searchInput"
        type="text"
        value=""
        placeholder="HAVE A QUESTION? SEARCH FOR ANSWERS"
      />
      <button
        type="submit"
        id="searchButton"
      >
        <i
          className="fas fa-search"
          id="searchAddIcon"
        />
      </button>
    </form>

  </div>
);

export default SearchForm;
