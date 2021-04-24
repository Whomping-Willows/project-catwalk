import React, { useState, useContext, useEffect } from 'react';
import { ApiContext } from '../../../contexts/api.context.jsx';
import AnswerList from './AnswerList.jsx';

const QAListItem = ({ question }) => {
  const { putRequest, postRequest, questionId, setQuestionId, end } = useContext(ApiContext);

  const putQuestionHelpfulness = (questionId) => {
    console.log('Endpoint param from QAListItem ', end.QuestionsHelpful);
    setQuestionId(questionId);
    putRequest(end.QuestionsHelpful, null);
  };

  const helpful = (
    <div className="questionHelpful">
      Helpful?
      <button
        type="submit"
        className="helpfulButton"
        onClick={
          () => { putQuestionHelpfulness(question.question_id); }
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
    <li key={question.question_id}
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
