/* eslint-disable import/extensions */
import React, { useState, useContext, useEffect } from 'react';
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
    <div id="askYourQuestion">
      <h3>
        Don&apos;t see the answer you&apos;re looking for?
      </h3>
      <button type="submit">
        ASK YOUR QUESTION
        <i className="fas fa-plus" id="reviewsAddPlus" />
      </button>
    </div>
    <AskQuestionForm />
  </div>
);

export default Question;
