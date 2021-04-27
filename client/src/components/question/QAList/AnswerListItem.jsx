/* eslint-disable react/prop-types */
/* eslint-disable import/extensions */
import React, { useState, useContext, useEffect } from 'react';
import { ApiContext } from '../../../contexts/api.context.jsx';
import formatDate from '../../../helpers/formatDate.js';

const AnswerListItem = ({ answer, updateHelpfulness }) => {
  const {
    putRequest, setAnswerId, end,
  } = useContext(ApiContext);

  const [helpful, setHelpful] = useState(false);
  const [report, setReport] = useState(false);

  useEffect(() => {
    putRequest(end.answerHelpful, null)
      .then(() => {
        updateHelpfulness(answer.id);
      });
  }, [helpful]);

  const updatePutRequest = (callback) => {
    setAnswerId(answer.id);
    callback(true);
  };

  useEffect(() => {
    putRequest(end.answerReport, null);
  }, [report]);

  // const seller = answer.answerer_name === 'seller' ? <p id="seller">SELLER</p> : null;

  const styles = helpful ? { textDecoration: 'none' } : null;

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
          style={styles}
          id="answerHelpfulButton"
          className="helpfulButton"
          type="submit"
          onClick={!helpful ? () => { updatePutRequest(setHelpful);
          } : null}
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
        onClick={() => {
          updatePutRequest(setReport);
        }}
      >
        {' '}
        Report
      </button>
    </li>
  ) : null;
};

export default AnswerListItem;
