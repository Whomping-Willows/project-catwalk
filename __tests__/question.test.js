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
          1082146: {
            answerer_name: 'ceasar',
            body: 'It says not to',
            date: '2018-03-08T00:00:00.000Z',
            helpfulness: 1,
            id: 1082146,
            photos: [],
          },
        },
      },
    ],
  };

  it('should render the Questions and Answers widget', () => {
    render(<QuestionContext />);
  });

  it('should render a list of 4 questions on page load', ()=> {

  });

  it('should render 2 additional questions if "See More Questions" is clicked');
});
