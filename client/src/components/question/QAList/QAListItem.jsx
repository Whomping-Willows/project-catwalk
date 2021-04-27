/* eslint-disable jsx-a11y/control-has-associated-label */
/* eslint-disable react/prop-types */
/* eslint-disable import/extensions */
import React, { useState, useContext } from 'react';
import { Modal } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { ApiContext } from '../../../contexts/api.context.jsx';
import AnswerList from './AnswerList.jsx';
import AddAnswerForm from './AddAnswerForm.jsx';

const QAListItem = ({ question }) => {
  const {
    questionId, getRequest, putRequest, setQuestionId, end,
  } = useContext(ApiContext);


  const [open, setOpen] = useState(false);

  const handleOpen = (e) => {
    console.log('1st', question.question_id);
    e.preventDefault();
    setQuestionId(question.question_id);
    console.log('2nd', questionId);
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const useStyles = makeStyles({
    askQuestionModal: {
      position: 'absolute',
      top: '10%',
      left: '10%',
      overflow: 'scroll',
      height: '100%',
      display: 'block',
    },
  });

  const classes = useStyles();

  const setQuestionPromise = () => new Promise((resolve, reject) => {
    if (question.question_id) {
      resolve(setQuestionId(question.question_id));
    } else {
      // eslint-disable-next-line prefer-promise-reject-errors
      reject('error');
    }
  });

  const putQuestionHelpfulness = () => {
    // console.log('Endpoint param from QAListItem ', end.questionHelpful);

    setQuestionPromise()
      .then(putRequest(end.questionHelpful))
      .then(getRequest(end.questionHelpful, (response) => {
        // need to re-render question
        // eslint-disable-next-line no-console
        console.log(response);
      }))
      .catch();
  };

  const helpful = (
    <div className="questionHelpful">
      Helpful?
      <button
        type="submit"
        className="helpfulButton"
        onClick={
          putQuestionHelpfulness
          }
      >
        <div>
          Yes (
          {question.question_helpfulness}
          ) |
        </div>
      </button>
    </div>
  );

  const questionStyle = {
    margin: 10,
  };

  const addAnswer = (
    <div className="questionHelpful">
      <button
        className="helpfulButton"
        id="addAnswerButton"
        type="submit"
        onClick={handleOpen}
      >
        Add Answer
      </button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="simple-modal-title"
        aria-describedby="simple-modal-description"
        container={() => document.getElementById('question')}
        className={classes.askQuestionModal}
      >
        <AddAnswerForm
          question_id={question.question_id}
          question_body={question.question_body}
          handleClose={handleClose}
        />
      </Modal>
    </div>
  );

  return (
    // eslint-disable-next-line jsx-a11y/click-events-have-key-events
    <li
      className="QAListItem"
    >
      <h3 style={questionStyle}>
        Q:
        {` ${question.question_body}`}
      </h3>
      {helpful}
      {addAnswer}
      <AnswerList
        answers={question.answers}
      />
    </li>
  );
};

export default QAListItem;
