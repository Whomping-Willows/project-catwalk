/* eslint-disable react/prop-types */
/* eslint-disable import/extensions */
import React, { useState, useContext, useEffect } from 'react';
import { ApiContext } from '../../contexts/api.context.jsx';
import { QuestionContext } from './QuestionContext.jsx';
import formatDate from '../../helpers/formatDate.js';

const AnswerListItem = ({ answer, updateHelpfulness, questionId,removeReportedAnswer }) => {
  const {
    putRequest, getRequest, setQuestionId, setAnswerId, end,
  } = useContext(ApiContext);

  const { setQuestions } = useContext(QuestionContext);

  const [helpful, setHelpful] = useState(false);
  const [reported, setReported] = useState(false);

  const updatePutRequest = (callback) => {
    setAnswerId(answer.id);
    callback(true);
  };

  useEffect(() => {
    if (helpful) {
      putRequest(end.answerHelpful, null)
        .then(() => {
          updateHelpfulness(answer.id);
        });
    }
  }, [helpful]);

  useEffect(() => {
    if (reported) {
      console.log('got here');
      setQuestionId(questionId);
      putRequest(end.answerReport, null)
        .then(() => {
          getRequest(end.listQuestions, (questionsMeta) => {
            console.log(questionsMeta.results);
            setQuestions(questionsMeta.results);
          });
        });
    }
  }, [reported]);

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
          onClick={!helpful ? () => {
            updatePutRequest(setHelpful);
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
          updatePutRequest(setReported);
        }}
      >
        {' '}
        Report
      </button>
    </li>
  ) : null;
};

export default AnswerListItem;
