/* eslint-disable react/prop-types */
/* eslint-disable import/extensions */
import React, {
  createContext, useState,
} from 'react';
// import { ApiContext } from '../../contexts/api.context.jsx';

export const QuestionContext = createContext();

export const QuestionProvider = (props) => {
  const [questions, setQuestions] = useState([]);
  const [renderedQuestions, setRenderedQuestions] = useState([]);

  return (
    <QuestionContext.Provider value={{
      questions, setQuestions, renderedQuestions, setRenderedQuestions,
    }}
    >
      {props.children}
    </QuestionContext.Provider>
  );
};
