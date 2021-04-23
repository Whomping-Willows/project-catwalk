import React from 'react';
import AnswerList from './AnswerList.jsx';

const QAListItem = ({ question }) => {
  const helpful = (
    <div id="questionHelpful">
      Helpful?
      <a href="javascript:void(0)"
      >
        <div
          // onClick={putHelpfulness} className=""
        >
          Yes (
            {question.question_helpfulness}
          ) |
        </div>
      </a>
    </div>
  );

  return (
    <li key={question.question_id}
      className="QAListItem"
    >
      <h3>
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
