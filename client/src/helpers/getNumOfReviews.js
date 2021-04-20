const getNumOfReviews = (metaData) => {
  let numOfReviews = 0;

  const values = Object.values(metaData.ratings);
  values.forEach((val) => {
    numOfReviews += Number(val);
  });

  return numOfReviews;
};

export default getNumOfReviews;
