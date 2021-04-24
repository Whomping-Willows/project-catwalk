import React, { useState } from 'react';
import { ApiContext } from '../../../contexts/api.context.jsx';
import QAListItem from './QAListItem.jsx'

const QAList = ({qaList}) => {
  const [index, setIndex] = useState(4);
  let rendered = qaList.slice(0, index);

  const moreQuestionsClick = () => {
    if (index === 4) {
      setIndex(6);
      rendered = qaList.slice(0, index);
    } else if (index === 6) {
      setIndex(qaList.length);
      rendered = qaList;
    }
  };

  return (
    <div id="qaListContainer">
      <div id="qaListScroll">
        <ul id="qaList">
          {rendered.map((question) => (
            <QAListItem question={question} />
          ))}
        </ul>
      </div>
      <button
        id="moreAnsweredQuestions"
        type="submit"
        onClick={moreQuestionsClick}
      >
        MORE ANSWERED QUESTIONS
      </button>
    </div>
  );
};

export default QAList;
