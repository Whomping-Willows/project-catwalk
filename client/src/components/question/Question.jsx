/* eslint-disable import/extensions */
import React from 'react';
import SearchForm from './SearchForm.jsx';
import QAList from './QAList/QAList.jsx';
import AskQuestionForm from './AskQuestionForm.jsx';

const Question = () => (
  <div className="question">
    <h2>QUESTIONS & ANSWERS</h2>
    <SearchForm />
    <QAList />
    <button
      id="moreAnsweredQuestions"
      type="submit"
    >
      MORE ANSWERED QUESTIONS
    </button>
    <AskQuestionForm />
  </div>
);

export default Question;
