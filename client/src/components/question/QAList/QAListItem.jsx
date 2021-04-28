/* eslint-disable import/extensions */
import React, { useState, useContext, useEffect } from 'react';
import { Modal } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { ApiContext } from '../../../contexts/api.context.jsx';
import AnswerList from './AnswerList.jsx';
import AddAnswerForm from './AddAnswerForm.jsx';

const QAListItem = ({ question, setQuestions }) => {
  const {
    questionId, getRequest, putRequest, setQuestionId, end,
  } = useContext(ApiContext);

  const [helpful, setHelpful] = useState(false);
  const [open, setOpen] = useState(false);
  const [answers, setAnswers] = useState(question.answers);

  const handleOpen = (e) => {
    e.preventDefault();
    setQuestionId(question.question_id);
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

  const styles = helpful ? { textDecoration: 'none' } : null;

  const putQuestionHelpfulness = () => {
    setQuestionId(question.question_id);
    setHelpful(true);
  };

  useEffect(() => {
    if (helpful) {
      putRequest(end.questionHelpful)
        .then(() => {
          getRequest(end.listQuestions, (questions) => {
            setQuestions(questions.results);
          });
        });
    }
  }, [helpful]);

  const helpfulContainer = (
    <div className="questionHelpful">
      Helpful?
      <button
        style={styles}
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
    <li
      className="QAListItem"
    >
      <h3 style={questionStyle}>
        Q:
        {` ${question.question_body}`}
      </h3>
      {helpfulContainer}
      {addAnswer}
      <AnswerList
        answers={answers}
        setAnswers={setAnswers}
      />
    </li>
  );
};

export default QAListItem;
