/* eslint-disable no-plusplus */
/* eslint-disable no-param-reassign */
/* eslint-disable react/prop-types */
/* eslint-disable import/extensions */
import React, { useState, useContext, useEffect } from 'react';
import { Modal } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { ApiContext } from '../../contexts/api.context.jsx';
import { QuestionContext } from './QuestionContext.jsx';
import AnswerList from './AnswerList.jsx';
import AddAnswerForm from './AddAnswerForm.jsx';

const QAListItem = ({ question }) => {
  const {
    getRequest, putRequest, setQuestionId, questionId, end,
  } = useContext(ApiContext);

  const { setQuestion, setQuestions, questions } = useContext(QuestionContext);

  const [helpful, setHelpful] = useState(false);
  const [reported, setReported] = useState(false);
  const [open, setOpen] = useState(false);
  const [answers, setAnswers] = useState();
  const [renderedAnswers, setRenderedAnswers] = useState();
  const [allAnswerIds, setAllAnswerIds] = useState();

  useEffect(() => {
    setAnswers(question.answers);
  }, [question]);

  useEffect(() => {
    if (answers) {
      setAllAnswerIds(Object.keys(answers));
    }
  }, [answers]);

  useEffect(() => {
    if (allAnswerIds) {
      setRenderedAnswers(allAnswerIds.slice(0, 2));
    }
  }, [allAnswerIds]);

  // useEffect(() => {
  //   setRenderedAnswers(answers);
  // }, [answers]);

  const addNewAnswer = (answer) => {
    setRenderedAnswers([...renderedAnswers, answer]);
  };

  const handleOpen = (e) => {
    e.preventDefault();
    setQuestionId(question.question_id);
    setQuestion(question);
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
          setAnswers={setAnswers}
          handleClose={handleClose}
        />
      </Modal>
    </div>
  );

  return answers ? (
    <li
      className="QAListItem"
    >
      <h3 style={questionStyle}>
        Q:
        {` ${question.question_body}`}
      </h3>
      {helpfulContainer}
      <button
        id="questionReport"
        className="helpfulButton"
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
        setRenderedAnswers={setRenderedAnswers}
        renderedAnswers={renderedAnswers}
        setAnswers={setAnswers}
        answers={answers}
      />
    </li>
  ) : null;
};

export default QAListItem;
