/* eslint-disable camelcase */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/prop-types */
/* eslint-disable import/extensions */
import React, {
  createContext, useState,
} from 'react';
// import { ApiContext } from '../../contexts/api.context.jsx';

export const QuestionContext = createContext();

export const QuestionProvider = (props) => {
  // const [question_id, setQuestionId] = useState();
  const [question, setQuestion] = useState();
  const [questions, setQuestions] = useState();
  const [renderedQuestions, setRenderedQuestions] = useState();
  const [answerId, setAnswerId] = useState();
  // const [answers, setAnswers] = useState();
  // const [renderedAnswers, setRenderedAnswers] = useState();

  return (
    <QuestionContext.Provider value={{
      // setQuestionId,
      // question_id,
      question,
      setQuestion,
      questions,
      setQuestions,
      renderedQuestions,
      setRenderedQuestions,
      answerId,
      setAnswerId,
      // answers,
      // setAnswers,
      // renderedAnswers,
      // setRenderedAnswers,
    }}
    >
      {props.children}
    </QuestionContext.Provider>
  );
};
