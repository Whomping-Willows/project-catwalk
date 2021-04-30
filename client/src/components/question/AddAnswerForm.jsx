/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
/* eslint-disable camelcase */
/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable import/extensions */
import React, { useContext, useState } from 'react';
import { ApiContext } from '../../contexts/api.context.jsx';
import { QuestionContext } from './QuestionContext.jsx';

const AddAnswerForm = ({
  setAnswers, handleClose,
}) => {
  const {
    questionId,
    productName, postRequest, getRequest, setQuestionId, end,
  } = useContext(ApiContext);
  const {
    question, questions,
  } = useContext(QuestionContext);

  const [body, setAnswerBody] = useState();
  const [name, setAnswererName] = useState();
  const [email, setEmail] = useState();
  const [photos, setPhotos] = useState([]);

  const postData = {
    body,
    name,
    email,
    photos,
  };

  const addNewAnswer = () => {
    getRequest(end.answersList, (data) => {
      console.log(data.results);
      setAnswers(data.results);
    });
  };

  const handleAddAnswerSubmit = (e) => {
    e.preventDefault();

    setQuestionId(question.question_id);

    postRequest(end.answersList, postData, addNewAnswer);
    handleClose();
  };

  return (
    <div className="qaFormContainer">
      <h2>
        Submit your answer for:
        {` '${productName}' : ${question.question_body}` }
      </h2>
      <form>
        <div id="answerFormBody">
          <label
            htmlFor="answerFormBody"
          >
            <p>Your Answer: (1000 characters max) </p>
          </label>
          <input
            className="qaFormBody"
            name="body"
            type="text"
            value={body}
            onChange={(e) => setAnswerBody(e.target.value)}
            maxLength="1000"
            required
          />
        </div>
        <div id="answerFormName">
          <label
            htmlFor="answererName"
          >
            <p>Nickname: &quot;Example:jackson11!&quot;</p>
          </label>
          <input
            className="qaFormName"
            name="name"
            type="text"
            value={name}
            onChange={(e) => { setAnswererName(e.target.value); }}
            maxLength="60"
            required
          />
        </div>
        <div id="answerFormEmail">
          <label
            htmlFor="answererEmail"
          >
            <p>Email:</p>
          </label>
          <input
            className="qaFormEmail"
            name="email"
            type="text"
            value={email}
            onChange={(e) => { setEmail(e.target.value); }}
            maxLength="60"
            required
          />
        </div>
        <button
          type="submit"
          onClick={handleAddAnswerSubmit}
        >
          SUBMIT
        </button>
      </form>
    </div>
  );
};

export default AddAnswerForm;
