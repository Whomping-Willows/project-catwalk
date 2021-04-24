import React, { useState, useContext, useEffect } from 'react';
import { ApiContext } from '../../../contexts/api.context.jsx';

const AnswerList = ({ answers }) => {
  const { putRequest, postRequest, answerId, setAnswerId, end } = useContext(ApiContext);

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

  const putAnswerHelpfulness = () => {
    console.log('Endpoint param from AnswerListItem ', end.answersHelpful);
    putRequest(end.answersHelpful, null);
  };

  const putReportAnswer = () => {
    console.log('Endpoint param from AnswerListItem ', end.answersReport);
    putRequest(end.answersReport, null);
  };

  const answerList = rendered && (rendered.length > 0)
    ? rendered.map((answerId) => (
      <li
        key={answerId}
      >
        A:
        {' '}
        {answers[answerId].body}
        {' '}
        by
        {' '}
        {answers[answerId].answerer_name}
        {' '}
        -
        {' '}
        {answers[answerId].date}
        <div className="questionHelpful">
          Helpful?
          <button
            className="helpfulButton"
            type="submit"
            onClick={putAnswerHelpfulness}
          >
            <div
              className="questionHelpful"
            >
              Yes (
              {answers[answerId].helpfulness}
              ) |
            </div>
          </button>
        </div>
        <button
          className="helpfulButton"
          type="submit"
          onClick={putReportAnswer}
        >
          {' '}
          Report
        </button>
      </li>
    ))
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

  const listStyle = {
    listStyleType: 'none',
    paddingLeft: 5,
  };

  return (
    <div>
      <ul style={listStyle}>
        {answerList}
      </ul>
      {seeMoreAnswers}
    </div>
  );
};

export default AnswerList;
