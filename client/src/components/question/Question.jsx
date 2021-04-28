/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable import/extensions */
import React, { useState, useContext, useEffect } from 'react';
import { Modal } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import SearchForm from './SearchForm.jsx';
import QAList from './QAList/QAList.jsx';
import AskQuestionForm from './AskQuestionForm.jsx';
import { ApiContext } from '../../contexts/api.context.jsx';

// const dummyData = {
//   results: [
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

  const [questionsMeta, setQuestionsMeta] = useState();
  const [open, setOpen] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getRequest(end.listQuestions, setQuestionsMeta).then(() => {
      setLoading(false);
    });
  }, [productId]);

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
      {questionsMeta && (
        <>
          <h2>QUESTIONS & ANSWERS</h2>
          <SearchForm />
          <QAList
            qaList={questionsMeta.results}
          />
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
