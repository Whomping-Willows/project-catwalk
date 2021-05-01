/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable import/extensions */
import React, { useState, useContext, useEffect } from 'react';
import { Modal } from '@material-ui/core';
import { ApiContext } from '../../contexts/api.context.jsx';
import { QuestionContext } from './QuestionContext.jsx';
import QAListItem from './QAListItem.jsx';
import SearchForm from './SearchForm.jsx';
import AskQuestionForm from './AskQuestionForm.jsx';

const Question = () => {
  const { getRequest, end, productId } = useContext(ApiContext);
  const {
    questions, setQuestions, renderedQuestions,
    setRenderedQuestions, classes, handleOpen, handleClose,
  } = useContext(QuestionContext);

  const [open, setOpen] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getRequest(end.listQuestions, (data) => {
      setQuestions(data.results);
    });
  }, [productId]);

  useEffect(() => {
    if (questions) {
      setRenderedQuestions(questions.slice(0, 4));
      setLoading(false);
    }
  }, [questions]);

  const moreQuestionsClick = () => {
    if (renderedQuestions.length === 4) {
      setRenderedQuestions(questions.slice(0, 6));
    } else if (renderedQuestions.length === 6 && renderedQuestions.length < questions.length) {
      setRenderedQuestions(questions.slice(0, questions.length));
    } else if (renderedQuestions.length === questions.length) {
      setRenderedQuestions(questions.slice(0, 4));
    }
  };

  let seeMoreQuestionsText;

  if (questions && renderedQuestions) {
    if (renderedQuestions && (renderedQuestions.length < questions.length)) {
      seeMoreQuestionsText = 'SEE MORE QUESTIONS';
    } else if (renderedQuestions.length === questions.length && questions.length > 4) {
      seeMoreQuestionsText = 'COLLAPSE QUESTIONS';
    }
  }

  const seeMoreQuestions = renderedQuestions && questions.length > 4 ? (
    <button
      id="moreAnsweredQuestions"
      type="submit"
      onClick={moreQuestionsClick}
    >
      {seeMoreQuestionsText}
    </button>
  ) : null;

  return !loading ? (
    <div className="question">
      {questions && (
        <>
          <h2>QUESTIONS & ANSWERS</h2>
          <div id="qaContainer">
            <SearchForm />
            <div id="qaListScroll">
              <ul id="qaList">
                {renderedQuestions.map((question) => (
                  <QAListItem
                    key={question.question_id}
                    question={question}
                  />
                ))}
              </ul>
            </div>
            {seeMoreQuestions}
          </div>
          <div id="askYourQuestion">
            <label id="askQuestionLabel">
              Don&apos;t see the answer you&apos;re looking for?
            </label>
            <button
              className="button"
              type="submit"
              onClick={() => { handleOpen(setOpen); }}
            >
              ASK YOUR QUESTION
              <i className="fas fa-plus" id="reviewsAddPlus" />
            </button>
          </div>
          <Modal
            open={open}
            onClose={() => { handleClose(setOpen); }}
            aria-labelledby="simple-modal-title"
            aria-describedby="simple-modal-description"
            container={() => document.getElementById('question')}
            className={classes.askQuestionModal}
          >
            <AskQuestionForm
              handleClose={() => { handleClose(setOpen); }}
            />
          </Modal>
        </>
      )}
    </div>
  ) : (
    <h2>LOADING...</h2>
  );
};

export default Question;
