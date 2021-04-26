/* eslint-disable import/extensions */
/* eslint-disable react/prop-types */
/* eslint-disable camelcase */
/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useContext, useState } from 'react';
import { ApiContext } from '../../contexts/api.context.jsx';

const AskQuestionForm = ({ handleClose }) => {
  const {
    productName, productId, postRequest, end,
  } = useContext(ApiContext);

  const [question_body, setQuestionBody] = useState();
  const [asker_name, setAskerName] = useState();
  const [email, setEmail] = useState();

  const handleAskQuestionSubmit = () => {
    postRequest(end.addQuestion, {
      product_id: productId,
      asker_name,
      question_body,
      question_date,
      email,
    });
    // need a promise and alert that it has been submitted.

    handleClose();
  };

  return (
    <div id="questionFormContainer">
      <h2>
        Ask Your Question About
        {` '${productName}' ` }
        Here
      </h2>
      <form>
        <label
          htmlFor="askQuestion"
        >
          Your Question:
        </label>
        <input
          id="questionBody"
          name="questionBody"
          type="text"
          value={question_body}
          onChange={(e) => setQuestionBody(e.target.value)}
          placeholder="(1000 characters max)"
          maxLength="1000"
          required
        />
        <label
          htmlFor="asker_name"
        >
          Nickname: &quot;Example:jackson11!&quot;
        </label>
        <input
          id="asker_name"
          name="asker_name"
          type="text"
          value={asker_name}
          onChange={(e) => { setAskerName(e.target.value); }}
          maxLength="60"
          required
        />
        <label
          htmlFor="question-email"
        >
          Email:
        </label>
        <input
          id="question-email"
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
