/* eslint-disable import/extensions */
/* eslint-disable react/prop-types */
/* eslint-disable camelcase */
/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useContext, useState, useEffect } from 'react';
import { ApiContext } from '../../contexts/api.context.jsx';
import { QuestionContext } from './QuestionContext.jsx';

const AskQuestionForm = ({ handleClose }) => {
  const {
    productName, productId, postRequest, getRequest, end,
  } = useContext(ApiContext);

  const { questions, setQuestions, setRenderedQuestions } = useContext(QuestionContext);

  const [body, setQuestionBody] = useState();
  const [name, setAskerName] = useState();
  const [email, setEmail] = useState();

  const postData = {
    body,
    name,
    email,
    product_id: productId,
  };

  useEffect(() => {
    setRenderedQuestions(questions);
  }, [questions]);

  const postDataHelper = () => {
    getRequest(end.listQuestions, (data) => {
      setQuestions(data.results);
    });
  };

  const handleAskQuestionSubmit = (e) => {
    e.preventDefault();

    postRequest(end.addQuestion, postData, postDataHelper);
    handleClose();
  };

  return (
    <div className="qaFormContainer">
      <h2>
        Ask Your Question About
        {` '${productName}' ` }
        Here
      </h2>
      <form>
        <label
          htmlFor="questionBody"
        >
          <p>Your Question: (1000 characters max) </p>
        </label>
        <input
          className="qaFormBody"
          name="body"
          type="text"
          value={body}
          onChange={(e) => setQuestionBody(e.target.value)}
          maxLength="1000"
          required
        />
        <label
          htmlFor="askerName"
        >
          <p>Nickname: &quot;Example:jackson11!&quot;</p>
        </label>
        <input
          className="qaFormName"
          name="name"
          type="text"
          value={name}
          onChange={(e) => { setAskerName(e.target.value); }}
          maxLength="60"
          required
        />
        <label
          htmlFor="questionEmail"
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
        <h3>For authentication reasons, you will not be emailed</h3>
        <button
          type="submit"
          onClick={handleAskQuestionSubmit}
        >
          SUBMIT
        </button>
      </form>
    </div>
  );
};

export default AskQuestionForm;
