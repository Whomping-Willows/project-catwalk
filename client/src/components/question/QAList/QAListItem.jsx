/* eslint-disable react/prop-types */
/* eslint-disable import/extensions */
import React, { useState, useContext, useEffect } from 'react';
import { ApiContext } from '../../../contexts/api.context.jsx';
import AnswerList from './AnswerList.jsx';

const QAListItem = ({ question }) => {
  const {
    getRequest, putRequest, setQuestionId, end,
  } = useContext(ApiContext);

  const setQuestionPromise = () => new Promise((resolve, reject) => {
    if (question.question_id) {
      resolve(setQuestionId(question.question_id));
    } else {
      reject('error');
    }
  });

  const putQuestionHelpfulness = () => {
    // console.log('Endpoint param from QAListItem ', end.questionHelpful);

    setQuestionPromise()
      .then(putRequest(end.questionHelpful))
      .then(getRequest(end.questionHelpful, (response) => {
        // need to re-render question
        console.log(response);
      }))
      .catch();
  };

  const helpful = (
    <div className="questionHelpful">
      Helpful?
      <button
        type="submit"
        className="helpfulButton"
        onClick={
          putQuestionHelpfulness
          }
        // className=""
      >
        <div>
          Yes (
          {question.question_helpfulness}
          ) |
        </div>
      </button>
    </div>
  );

  const questionStyle = {
    margin: 10,
  };

  return (
    <li
      className="QAListItem"
    >
      <h3 style={questionStyle}>
        Q:
        {` ${question.question_body}`}
      </h3>
      {helpful}
      <AnswerList
        answers={question.answers}
      />
    </li>
  );
};

export default QAListItem;
