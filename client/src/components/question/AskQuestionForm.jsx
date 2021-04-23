import React from 'react';

const AskQuestionForm = () => {
  const productName = 'Camo Onesie';
  // use api context product name

  // post question, email and name to api
  return (
    <div id="questionFormContainer">
      <h2>
        Ask Your Question About
        {` '${productName}' ` }
        Here
      </h2>
      <form>
        <label
          htmlFor="question"
        >
          *Your Question:
        </label>
        <input
          id="question"
          name="question"
          type="text"
          value=""
          placeholder="(1000 characters max)"
        />
        <label
          htmlFor="question-nickname"
        >
          *Nickname: "Example:jackson11!"
        </label>
        <input
          id="question-nickname"
          name="nickname"
          type="text"
          value=""
        />
        <label
          htmlFor="question-email"
        >
          *Email:
        </label>
        <input
          id="question-email"
          name="email"
          type="text"
          value=""
        />
        <h3>For authentication reasons, you will not be emailed</h3>
        <button type="submit">
          SUBMIT
        </button>
      </form>

    </div>
  );
};

export default AskQuestionForm;
