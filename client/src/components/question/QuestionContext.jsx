/* eslint-disable camelcase */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/prop-types */
/* eslint-disable import/extensions */
import React, {
  createContext, useState,
} from 'react';
import { makeStyles } from '@material-ui/core/styles';

export const QuestionContext = createContext();

export const QuestionProvider = (props) => {
  const [question, setQuestion] = useState();
  const [questions, setQuestions] = useState();
  const [renderedQuestions, setRenderedQuestions] = useState();
  const [answers, setAnswers] = useState();

  const handleOpen = (cb) => {
    cb(true);
  };

  const handleClose = (cb) => {
    cb(false);
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

  return (
    <QuestionContext.Provider value={{
      question,
      setQuestion,
      questions,
      setQuestions,
      renderedQuestions,
      setRenderedQuestions,
      answers,
      setAnswers,
      classes,
      handleOpen,
      handleClose,
    }}
    >
      {props.children}
    </QuestionContext.Provider>
  );
};
