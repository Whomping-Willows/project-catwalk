/* eslint-disable jsx-a11y/control-has-associated-label */
/* eslint-disable react/prop-types */
/* eslint-disable import/extensions */
import React, { useState, useContext, useEffect } from 'react';
import { Modal } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { ApiContext } from '../../../contexts/api.context.jsx';
import AnswerList from './AnswerList.jsx';
import AddAnswerForm from './AddAnswerForm.jsx';

const QAListItem = ({ question }) => {
  const {
    getRequest, putRequest, setQuestionId, end,
  } = useContext(ApiContext);

  const [open, setOpen] = useState(false);

  const handleOpen = () => {
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
      reject('error');
    }
  });

  const putQuestionHelpfulness = () => {
    // console.log('Endpoint param from QAListItem ', end.questionHelpful);

    setQuestionPromise()
      .then(putRequest(end.questionHelpful))
      .then(getRequest(end.questionHelpful, (response) => {
        // need to re-render question
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
        // className=""
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
          handleClose={handleClose}
        />
      </Modal>
    </div>
  );

  return (
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
