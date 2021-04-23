import React, { useState, useContext, useEffect } from 'react';
import { ApiContext } from '../../../contexts/api.context.jsx';

const AnswerList = ({ answers }) => {
  const { postRequest, end } = useContext(ApiContext);

  const [index, setIndex] = useState(2);
  const allAnswers = Object.keys(answers);
  const [rendered, setRendered] = useState(allAnswers.slice(0, 4));

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

  const report = (
    <a href="javascript:void(0)">
      <p
      // onClick={putReportReview}
        className="answerReport"
      >
        {' '}
        Report
      </p>
    </a>
  );

  const answerList = rendered && (rendered.length > 0)
    ? rendered.map((answerId) => (
      <li key={answerId}>
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
        <div id="questionHelpful">
          Helpful?
          <a href="javascript:void(0)">
            <div>
              Yes (
              {answers[answerId].helpfulness}
              ) |
            </div>
          </a>
        </div>
        {report}
      </li>
    ))
    : null;

  let seeMoreAnswers;

  if (rendered && (rendered.length < allAnswers.length)) {
    seeMoreAnswers = (
      <button
        className="moreAnswersButton"
        type="submit"
        onClick={seeMoreAnswersClick}
      >
        SEE MORE ANSWERS
      </button>
    );
  } else if (rendered.length === allAnswers.length && allAnswers.length > 2) {
    seeMoreAnswers = (
      <button
        className="moreAnswersButton"
        type="submit"
        onClick={seeMoreAnswersClick}
      >
        COLLAPSE ANSWERS
      </button>
    );
  } else {
    seeMoreAnswers = null;
  }

  return (
    <div>
      <ul>
        {answerList}
      </ul>
      {seeMoreAnswers}
    </div>
  );
};

export default AnswerList;
