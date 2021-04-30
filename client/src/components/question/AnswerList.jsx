/* eslint-disable react/prop-types */
/* eslint-disable import/extensions */
/* eslint-disable no-plusplus */
import React, { useState } from 'react';
// import { ApiContext } from '../../../contexts/api.context.jsx';
import AnswerListItem from './AnswerListItem.jsx';

const AnswerList = ({ answers, setAnswers }) => {
  const allAnswers = (Object.keys(answers));
  const [rendered, setRendered] = useState(allAnswers.slice(0, 2));

  // const addNewAnswer = (answer) => {
  //   setRendered([...rendered, answer]);
  // };

  const updateHelpfulness = (answerId) => {
    const updatedAnswers = { ...answers };
    updatedAnswers[answerId].helpfulness++;
    setAnswers(updatedAnswers);
  };

  const removeReportedAnswer = (answerId) => {
    // console.log('ANSWER ID', answerId);
    // console.log('ALL ANSWERS', allAnswers);
    const updatedAnswers = Object.keys(answers).filter((answer) => answer !== answerId.toString());
    // console.log("UPDATEDANSWERS", updatedAnswers);
    setAnswers(updatedAnswers);
  };

  const seeMoreAnswersClick = () => {
    if (rendered.length === 2) {
      setRendered(allAnswers.slice(0, 4));
    } else if (rendered.length === 4 && rendered.length < allAnswers.length) {
      setRendered(allAnswers);
    } else if (rendered.length === allAnswers.length) {
      setRendered(allAnswers.slice(0, 2));
    }
  };

  const answerList = rendered && (rendered.length > 0)
    ? rendered.map((answerId) => (
      <AnswerListItem
        key={answerId}
        answer={answers[answerId]}
        updateHelpfulness={updateHelpfulness}
        removeReportedAnswer={removeReportedAnswer}
        setAnswers={setAnswers}
      />
    ))
    : null;

  let seeMoreAnswersText;

  if (rendered && (rendered.length < allAnswers.length)) {
    seeMoreAnswersText = 'SEE MORE ANSWERS';
  } else if (rendered.length === allAnswers.length && allAnswers.length > 2) {
    seeMoreAnswersText = 'COLLAPSE ANSWERS';
  }

  const seeMoreAnswers = rendered && allAnswers.length > 2 ? (
    <button
      className="moreAnswersButton"
      type="submit"
      onClick={seeMoreAnswersClick}
    >
      {seeMoreAnswersText}
    </button>
  ) : null;

  return (
    <div id="answerListDiv">
      <ul id="answerList">
        {answerList}
      </ul>
      {seeMoreAnswers}
    </div>
  );
};

export default AnswerList;
