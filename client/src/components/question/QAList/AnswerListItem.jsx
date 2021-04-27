import React, { useState, useContext, useEffect } from 'react';
import { ApiContext } from '../../../contexts/api.context.jsx';
import formatDate from '../../../helpers/formatDate.js'

const AnswerListItem = ({ answer }) => {
  const {
    putRequest, setAnswerId, end,
  } = useContext(ApiContext);

  const putAnswerHelpfulness = () => {
    console.log('Endpoint param from AnswerListItem ', end.answerHelpful);
    putRequest(end.answerHelpful, null);
  };

  const putReportAnswer = () => {
    console.log('Endpoint param from AnswerListItem ', end.answerReport);
    putRequest(end.answerReport, null);
  };

  // const seller = answer.answerer_name === 'seller' ? <p id="seller">SELLER</p> : null;
  // console.log('GRAHAM', answer);
  return answer ? (
    <li className="answerListItem">
      <p id="answerTag">A:</p>
      {' '}
      <p id="answerBody">{answer.body}</p>
      {' '}
      <p id="answerNameDate">
        by
        {' '}
        {answer.answerer_name}
        {' '}
        -
        {' '}
        {/* {seller} */}
        {formatDate(answer.date)}
      </p>
      <div className="answerHelpful">
        Helpful?
        <button
          id="answerHelpfulButton"
          className="helpfulButton"
          type="submit"
          onClick={putAnswerHelpfulness}
        >
          <div
            className="questionHelpful"
          >
            Yes (
            {answer.helpfulness}
            )   |
          </div>
        </button>
      </div>
      <button
        id="answerReport"
        className="helpfulButton"
        type="submit"
        onClick={putReportAnswer}
      >
        {' '}
        Report
      </button>
    </li>
  ) : null;
};

export default AnswerListItem;
