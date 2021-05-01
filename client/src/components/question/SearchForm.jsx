/* eslint-disable react/prop-types */
/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable import/extensions */
import React, { useState, useContext, useEffect } from 'react';
import { QuestionContext } from './QuestionContext.jsx';

const SearchForm = () => {
  const { questions, setRenderedQuestions } = useContext(QuestionContext);

  const [query, setQuery] = useState('');
  // const [searchSubmit, setSearchSubmit] = useState(false);

  const handleSearchFormChange = (e) => {
    setQuery(e.target.value);
  };

  useEffect(() => {
    setRenderedQuestions(questions.filter((quest) => (
      quest.question_body.toLowerCase().includes(query.toLowerCase()))));
  }, [query]);

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
        {/* <button
          type="button"
          id="searchButton"
          onClick={(e) => {
            e.preventDefault();
          }}
        > */}
        <i
          className="fas fa-search"
          id="searchAddIcon"
        />
        {/* </button> */}
      </form>
    </div>
  );
};

export default SearchForm;
