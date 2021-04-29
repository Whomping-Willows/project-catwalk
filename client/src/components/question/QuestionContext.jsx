// /* eslint-disable import/extensions */
// import React, {
//   createContext, useContext, useState, useEffect,
// } from 'react';
// import { ApiContext } from '../../contexts/api.context.jsx';

// export const QuestionContext = createContext();

// export const QuestionProvider = (props) => {
//   const { getRequest, end, productId } = useContext(ApiContext);

//   const [questions, setQuestions] = useState([]);

//   useEffect(() => {
//     getRequest(end.listQuestions, (data) => {
//       console.log(data.results);
//       setQuestions(data.results);
//       console.log(questions);
//   });
//       // .then(() => {
//       //   console.log(questions);
//       //   setRendered(questions.slice(0, 4));
//       //   setLoading(false);
//       // });
//   }, [productId]);

//   return (
//     <QuestionContext.Provider
//       value={{ questions, setQuestions }}
//     >
//       {props.children}
//     </QuestionContext.Provider>
//   );
// };
