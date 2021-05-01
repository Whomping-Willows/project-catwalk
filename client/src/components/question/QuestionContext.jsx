/* eslint-disable camelcase */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/prop-types */
/* eslint-disable import/extensions */
import React, {
  createContext, useState,
} from 'react';

export const QuestionContext = createContext();

export const QuestionProvider = (props) => {
  const [question, setQuestion] = useState();
  const [questions, setQuestions] = useState();
  const [renderedQuestions, setRenderedQuestions] = useState();
  const [answers, setAnswers] = useState();

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
    }}
    >
      {props.children}
    </QuestionContext.Provider>
  );
};
