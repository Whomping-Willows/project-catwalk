import React, { useState } from 'react';
import QAListItem from './QAListItem.jsx';

function QAList({ qaList }) {
  const [questions, setQuestions] = useState(qaList);
  const [rendered, setRendered] = useState(questions.slice(0, 4));

  const moreQuestionsClick = () => {
    if (rendered.length === 4) {
      setRendered(questions.slice(0, 6));
    } else if (rendered.length === 6 && rendered.length < questions.length) {
      setRendered(questions.slice(0, questions.length));
    } else if (rendered.length === questions.length) {
      setRendered(questions.slice(0, 4));
    }

    console.log('QUESTIONS', questions);
    console.log('Rendered', rendered);
  };

  let seeMoreQuestionsText;

  if (rendered && (rendered.length < questions.length)) {
    seeMoreQuestionsText = 'SEE MORE QUESTIONS';
  } else if (rendered.length === questions.length && questions.length > 4) {
    seeMoreQuestionsText = 'COLLAPSE QUESTIONS';
  }
//   <button
//   id="moreAnsweredQuestions"
//   type="submit"
//   onClick={moreQuestionsClick}
// >
//   MORE ANSWERED QUESTIONS
// </button>

  const seeMoreQuestions = rendered && questions.length > 4 ? (
    <button
      id="moreAnsweredQuestions"
      type="submit"
      onClick={moreQuestionsClick}
    >
      {seeMoreQuestionsText}
    </button>
  ) : null;

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
      {seeMoreQuestions}
    </div>
  );
}

export default QAList;
