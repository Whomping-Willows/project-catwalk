import React from 'react';

const SearchForm = () => (
  <div id="searchContainer">
    <form id="searchForm">
      <label>
        <span className="visually-hidden">Have a question? Search for Answers</span>
      </label>
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
