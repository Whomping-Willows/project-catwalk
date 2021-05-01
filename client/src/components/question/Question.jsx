/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable import/extensions */
import React, { useState, useContext, useEffect } from 'react';
import { Modal } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { ApiContext } from '../../contexts/api.context.jsx';
import { QuestionContext } from './QuestionContext.jsx';
import QAListItem from './QAListItem.jsx';
import SearchForm from './SearchForm.jsx';
import AskQuestionForm from './AskQuestionForm.jsx';

// // const dummyData = {
// //   results: [
//     {
//       asker_name: 'cleopatra',
//       question_body: 'Can I wash it?',
//       question_date: '2018-02-08T00:00:00.000Z',
//       question_helpfulness: 27,
//       question_id: 114290,
//       answers: {
//         1082146: {
//           answerer_name: 'ceasar',
//           body: 'It says not to',
//           date: '2018-03-08T00:00:00.000Z',
//           helpfulness: 1,
//           id: 1082146,
//           photos: [],
//         },
//       },
//     },
//   ],
// };

const Question = () => {
  const { getRequest, end, productId } = useContext(ApiContext);
  const {
    questions, setQuestions, renderedQuestions, setRenderedQuestions,
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

  const handleOpen = () => {
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

  return !loading ? (
    <div className="question">
      {questions && (
        <>
          <h2>QUESTIONS & ANSWERS</h2>
          <div id="qaContainer">
            <SearchForm />
            <div id="qaListContainer">
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
          </div>
          <div id="askYourQuestion">
            <label id="askQuestionLabel">
              Don&apos;t see the answer you&apos;re looking for?
            </label>
            <button
              className="button"
              type="submit"
              onClick={handleOpen}
            >
              ASK YOUR QUESTION
              <i className="fas fa-plus" id="reviewsAddPlus" />
            </button>
          </div>
          <Modal
            open={open}
            onClose={handleClose}
            aria-labelledby="simple-modal-title"
            aria-describedby="simple-modal-description"
            container={() => document.getElementById('question')}
            className={classes.askQuestionModal}
          >
            <AskQuestionForm
              handleClose={handleClose}
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
