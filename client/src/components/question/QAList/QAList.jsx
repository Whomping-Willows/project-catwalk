import React, { useState, useContext, useEffect } from 'react';
import { ApiContext } from '../../../contexts/api.context.jsx';


const dummyData = {
  product_id: '18078', // number/string issue
  results: [
    {
      asker_name: "cleopatra",
      question_body: "Can I wash it?",
      question_date: "2018-02-08T00:00:00.000Z",
      question_helpfulness: 27,
      question_id: 114290,
      answers: {
        1082146: {
          answerer_name: "ceasar",
          body: "It says not to",
          date: "2018-03-08T00:00:00.000Z",
          helpfulness: 1,
          id: 1082146,
          photos: []
        }
      }
    }
  ]
}

const QAList = () => {

  return (
    <ul>
      {/* ???.map */}
    </ul>
  )
};

export default QAList;
