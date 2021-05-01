/* eslint-disable no-plusplus */
/* eslint-disable no-param-reassign */
/* eslint-disable react/prop-types */
/* eslint-disable import/extensions */
import React, { useState, useContext, useEffect } from 'react';
import { Modal } from '@material-ui/core';
import { ApiContext } from '../../contexts/api.context.jsx';
import { QuestionContext } from './QuestionContext.jsx';
import AnswerList from './AnswerList.jsx';
import AddAnswerForm from './AddAnswerForm.jsx';

const QAListItem = ({ question }) => {
  const {
    getRequest, putRequest, setQuestionId, questionId, end,
  } = useContext(ApiContext);

  const {
    setQuestion, setQuestions, questions, classes, handleClose,
  } = useContext(QuestionContext);

  const [helpful, setHelpful] = useState(false);
  const [reported, setReported] = useState(false);
  const [open, setOpen] = useState(false);
  const [answers, setAnswers] = useState();

  useEffect(() => {
    setAnswers(question.answers);
  }, [question]);

  const handleOpen = (e) => {
    e.preventDefault();
    setQuestionId(question.question_id);
    setQuestion(question);
    setOpen(true);
  };

  const putQuestion = (callback) => {
    setQuestionId(question.question_id);
    callback(true);
  };

  let styles = {};

  const updateHelpfulness = (questionID) => {
    let updatedQuestions = [];
    updatedQuestions = questions.map((q) => {
      if (q.question_id === questionID) {
        q.question_helpfulness++;
      }
      return q;
    });
    setQuestions(updatedQuestions);
    styles = { textDecoration: 'none' };
  };

  useEffect(() => {
    if (helpful) {
      putRequest(end.questionHelpful)
        .then(() => {
          updateHelpfulness(questionId);
        });
    }
  }, [helpful]);

  useEffect(() => {
    if (reported) {
      putRequest(end.questionReport)
        .then(() => {
          getRequest(end.listQuestions, (questionsMeta) => {
            setQuestions(questionsMeta.results);
          });
        });
    }
  }, [reported]);

  const helpfulContainer = (
    <div className="questionHelpful">
      Helpful?
      <button
        style={styles}
        type="submit"
        className="helpfulButton"
        onClick={() => {
          putQuestion(setHelpful);
        }}
      >
        <div>
          Yes (
          {question.question_helpfulness}
          ) |
        </div>
      </button>
    </div>
  );

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
        onClose={() => { handleClose(setOpen); }}
        aria-labelledby="simple-modal-title"
        aria-describedby="simple-modal-description"
        container={() => document.getElementById('question')}
        className={classes.askQuestionModal}
      >
        <AddAnswerForm
          answers={answers}
          setAnswers={setAnswers}
          handleClose={() => { handleClose(setOpen); }}
          questionId={question.question_id}
        />
      </Modal>
    </div>
  );

  return answers ? (
    <li
      className="QAListItem"
    >
      <h3 id="questionBody">
        Q:
        {` ${question.question_body}`}
      </h3>
      {helpfulContainer}
      <button
        id="questionReport"
        className="questionHelpful helpfulButton"
        type="submit"
        onClick={() => {
          putQuestion(setReported);
        }}
      >
        {' '}
        Report
      </button>
      {addAnswer}
      <AnswerList
        setAnswers={setAnswers}
        answers={answers}
      />
    </li>
  ) : null;
};

export default QAListItem;
