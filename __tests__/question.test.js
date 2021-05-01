import React from 'react';
import { render } from '../utils/test-utils.jsx';
import QuestionContext from '../client/src/components/question/QuestionContext.jsx';

describe('QA tests', () => {
  const questionMeta = {
    product_id: '18078',
    results: [
      {
        asker_name: 'cleopatra',
        question_body: 'Can I wash it?',
        question_date: '2018-02-08T00:00:00.000Z',
        question_helpfulness: 27,
        question_id: 114290,
        answers: {
          1443949: {
            answerer_name: '',
            body: "Wash in cold. You'll thank me later.",
            date: '2021-03-11T00:00:00.000Z',
            helpfulness: 11,
            id: 1443949,
            photos: [],
          },
          1444025: {
            answerer_name: 'UniqueUsrNm',
            body: 'Wash in cold.',
            date: '2021-03-11T00:00:00.000Z',
            helpfulness: 5,
            id: 1444025,
            photos: [],
          },
          1444028: {
            answerer_name: 'SomethingCool',
            body: 'Of course, looks even better after',
            date: '2021-03-11T00:00:00.000Z',
            helpfulness: 0,
            id: 1444028,
            photos: [],
          },
        },
      },
    ],
  };

  it('should render the Questions and Answers widget', () => {
    render(<QuestionContext />);
  });

  it('should render a list of 4 questions on page load', () => {

  });

  it('should render 2 additional questions if "See More Questions" is clicked');
});
