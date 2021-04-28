import React, { useState } from 'react';
import QAListItem from './QAListItem.jsx';

function QAList({ qaList }) {
  const [questions, setQuestions] = useState(qaList);
  const [index, setIndex] = useState(4);
  let rendered = questions.slice(0, index);

  const moreQuestionsClick = () => {
    if (index === 4) {
      setIndex(6);
      rendered = questions.slice(0, index);
    } else if (index === 6) {
      setIndex(questions.length);
      rendered = questions;
    }
  };



  return (
    <div id="qaListContainer">
      <div id="qaListScroll">
        <ul id="qaList">
          {rendered.map((question) => (
            <QAListItem
              key={question.question_id}
              setQuestions={setQuestions}
              question={question}
            />
          ))}
        </ul>
      </div>
      <button
        id="moreAnsweredQuestions"
        type="submit"
        onClick={moreQuestionsClick}
      >
        MORE ANSWERED QUESTIONS
      </button>
    </div>
  );
}

export default QAList;
