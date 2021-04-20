/* eslint-disable no-restricted-syntax */
/* eslint-disable vars-on-top */
/* eslint-disable no-var */
/* eslint-disable guard-for-in */
const getReviewsAvg = (metaData) => {
  var sum = 0;
  var numOfReviews = 0;

  for (var key in metaData.ratings) {
    const value = Number(metaData.ratings[key]);
    sum += key * value;
    numOfReviews += value;
  }

  return Number.parseFloat(sum / numOfReviews).toFixed(1);
};

export default getReviewsAvg;
