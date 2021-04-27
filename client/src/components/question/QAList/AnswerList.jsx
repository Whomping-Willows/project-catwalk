import React, { useState } from 'react';
import { ApiContext } from '../../../contexts/api.context.jsx';
import AnswerListItem from './AnswerListItem.jsx';

const AnswerList = ({ answers }) => {
  // console.log(answers);
  const [index, setIndex] = useState(2);
  const allAnswers = Object.keys(answers);
  const [rendered, setRendered] = useState(allAnswers.slice(0, index));

  const seeMoreAnswersClick = () => {
    if (index === 2) {
      setIndex(4);
    } else if (index === 4) {
      setIndex(allAnswers.length);
    } else if (index === allAnswers.length) {
      setIndex(2);
    }
    setRendered(allAnswers.slice(0, index));
  };

  const answerList = rendered && (rendered.length > 0)
    ? rendered.map((answerId) => {
      // console.log(answers[answerId]);
      return (
        <AnswerListItem
          key={answerId}
          answer={answers[answerId]}
        />
      );
})
    : null;

  let seeMoreAnswersText;

  if (rendered && (rendered.length < allAnswers.length)) {
    seeMoreAnswersText = 'SEE MORE ANSWERS';
  } else if (rendered.length === allAnswers.length && allAnswers.length > 2) {
    seeMoreAnswersText = 'COLLAPSE ANSWERS';
  }

  const seeMoreAnswers = rendered ? (
    <button
      className="moreAnswersButton"
      type="submit"
      onClick={seeMoreAnswersClick}
    >
      {seeMoreAnswersText}
    </button>
  ) : null;

  return (
    <div>
      <ul id="answerList">
        {answerList}
      </ul>
      {seeMoreAnswers}
    </div>
  );
};

export default AnswerList;
