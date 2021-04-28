/* eslint-disable react/prop-types */
/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable import/extensions */
import React, { useState, useContext, useEffect } from 'react';

const SearchForm = ({ questions, setRendered }) => {
  const [query, setQuery] = useState('');

  const handleSearchFormChange = (e) => {
    setQuery(e.target.value);
  };

  const searchFormSubmitHandler = (e) => {
    e.preventDefault();

    const queryMatches = [];
    questions.forEach((question) => {
      if (question.question_body.indexOf(query) !== -1) {
        queryMatches.push(question);
      }
    });
    setRendered(queryMatches);
  };

  return (
    <div
      id="searchContainer"
    >
      <form id="searchForm">
        <label className="visually-hidden">
          Have a question? Search for Answers
        </label>
        <input
          id="searchQuery"
          type="text"
          value={query}
          onChange={handleSearchFormChange}
          placeholder="HAVE A QUESTION? SEARCH FOR ANSWERS"
        />
        <button
          type="submit"
          id="searchButton"
          onSubmit={searchFormSubmitHandler}
        >
          <i
            className="fas fa-search"
            id="searchAddIcon"
          />
        </button>
      </form>
    </div>
  );
};

export default SearchForm;
