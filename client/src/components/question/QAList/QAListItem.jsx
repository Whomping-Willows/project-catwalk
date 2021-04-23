import React from 'react';
import AnswerList from './AnswerList.jsx';

const QAListItem = ({ question }) => {
  const helpful = (
    <div id="questionHelpful">
      <p>Helpful?</p>
      <p>Yes</p>
      <p>
        {` (
        ${question.question_helpfulness}
        )`}
      </p>
    </div>
  );

  return (
    <li key={question.question_id}>
      Q:
      {` ${question.question_body}`}
      {helpful}
    </li>
  );
};

export default QAListItem;
