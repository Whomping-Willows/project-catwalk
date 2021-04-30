/* eslint-disable react/prop-types */
/* eslint-disable import/extensions */
/* eslint-disable no-plusplus */
import React, { useEffect, useState } from 'react';
import AnswerListItem from './AnswerListItem.jsx';

const AnswerList = ({
  answers, setAnswers,
}) => {
  const [renderedAnswers, setRenderedAnswers] = useState();
  const [allAnswerIds, setAllAnswerIds] = useState();

  useEffect(() => {
    console.log('answers', answers);
    if (answers) {
      setAllAnswerIds(Object.keys(answers));
    }
  }, [answers]);

  useEffect(() => {
    console.log('got here');
    if (allAnswerIds) {
      setRenderedAnswers(allAnswerIds.slice(0, 2));
    }
  }, [allAnswerIds]);

  const updateHelpfulness = (answerId) => {
    const updatedAnswers = { ...answers };
    updatedAnswers[answerId].helpfulness++;
    setAnswers(updatedAnswers);
  };

  const removeReportedAnswer = (answerId) => {
    const updatedAnswers = Object.keys(answers).filter((answer) => answer !== answerId.toString());

    setAnswers(updatedAnswers);
  };

  const seeMoreAnswersClick = () => {
    if (renderedAnswers.length === 2) {
      setRenderedAnswers(allAnswerIds.slice(0, 4));
    } else if (renderedAnswers.length === 4 && renderedAnswers.length < allAnswerIds.length) {
      setRenderedAnswers(allAnswerIds);
    } else if (renderedAnswers.length === allAnswerIds.length) {
      setRenderedAnswers(allAnswerIds.slice(0, 2));
    }
  };

  const answerList = renderedAnswers && (renderedAnswers.length > 0)
    ? renderedAnswers.map((answerId) => (
      <AnswerListItem
        key={answerId}
        answer={answers[answerId]}
        updateHelpfulness={updateHelpfulness}
        removeReportedAnswer={removeReportedAnswer}
      />
    )) : null;

  let seeMoreAnswersText;

  if (renderedAnswers && allAnswerIds) {
    if (renderedAnswers.length < allAnswerIds.length) {
      seeMoreAnswersText = 'SEE MORE ANSWERS';
    } else if (renderedAnswers.length === allAnswerIds.length && allAnswerIds.length > 2) {
      seeMoreAnswersText = 'COLLAPSE ANSWERS';
    }
  }

  const seeMoreAnswers = renderedAnswers && allAnswerIds && allAnswerIds.length > 2 ? (
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
