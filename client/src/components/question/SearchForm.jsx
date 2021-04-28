/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable import/extensions */
import React, { useState, useContext, useEffect } from 'react';
import { ApiContext } from '../../contexts/api.context.jsx';

const SearchForm = () => {
  const { getRequest, end, productId } = useContext(ApiContext);
  const [questionList, setQuestionList] = useState();
  // const [loading, setLoading] = useState(true);
  const [query, setQuery] = useState('');

  useEffect(() => {
    getRequest(end.listQuestions, setQuestionList).then(() => {
      setLoading(false);
    });
  }, [productId]);

  const handleSearchFormChange = (e) => {
    setQuery(e.target.value);
  };

  // !loading ?
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
        >
          <i
            className="fas fa-search"
            id="searchAddIcon"
          />
        </button>
      </form>
    </div>
  )
  // : null;
};

export default SearchForm;
