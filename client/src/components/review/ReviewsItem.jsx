/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable react/prop-types */
/* eslint-disable import/extensions */
import React, { useContext, useState } from 'react';
import { Modal } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { ApiContext } from '../../contexts/api.context.jsx';
import ReviewsStars from './ReviewsStars.jsx';
import formatDate from '../../helpers/formatDate.js';

const ReviewsItem = ({ review }) => {
  const [open, setOpen] = useState(false);
  const [currentModalImg, setCurrentModalImg] = useState();

  const { end, putRequest, setReviewId } = useContext(ApiContext);

  const putHelpfulness = (e) => {
    setReviewId(e.target.name);
    putRequest(end.reviewsHelpful, null);
  };

  const putReportReview = (e) => {
    setReviewId(e.target.name);
    putRequest(end.reviewsReport, null);
  };

  const handleOpen = (e) => {
    const img = e.target.src;
    setOpen(true);
    setCurrentModalImg(img);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const useStyles = makeStyles({
    reviewsModal: {
      position: 'absolute',
      top: '10%',
      left: '10%',
      overflow: 'scroll',
      height: '700px',
      width: 'auto',
      display: 'block',
    },
  });

  const classes = useStyles();

  return (
    <div id="reviewItem">
      <div id="reviewSubTitleStars">
        <ReviewsStars rating={review.rating} />
      </div>
      <div id="reviewSubTitleUserDate">
        {review.reviewer_name}
        ,
        {' '}
        {formatDate(review.date)}
      </div>
      <h3 id="reviewTitle">{review.summary}</h3>
      <p id="reviewBody">{review.body}</p>
      {review.recommend
        && (
          <div id="reviewIsRecDiv">
            <i className="fas fa-check" />
            <div id="reviewIsRec">I recommend this product</div>
          </div>
        )}
      {review.response
        && (
          <div id="reviewResponse">
            <p id="reviewResponseTitle">Response: </p>
            <p id="reviewResponseBody">{review.response}</p>
          </div>
        )}
      {review.photos.length > 0 && (

        <div id="reviewsPhotos">
          {review.photos.map((photo) => (
            <>
              <div className="reviewsPhotoDiv">
                <img
                  className="reviewsImg"
                  alt={review.name}
                  name={review.review_id}
                  onKeyDown={handleOpen}
                  onClick={handleOpen}
                  src={photo.url}
                />
              </div>
              {open && (
              <div className="reviewsModalImgDiv">
                <Modal
                  open={open}
                  onClose={handleClose}
                  aria-labelledby="large-version-of-image"
                  aria-describedby="simple-modal-description"
                  container={() => document.getElementById('reviews')}
                  className={classes.reviewsModal}
                >
                  <img
                    className="reviewsModalImg"
                    alt={review.name}
                    name={review.review_id}
                    onClick={review.photos[0].url}
                    onKeyDown={review.photos[0].url}
                    src={currentModalImg}
                  />
                </Modal>
              </div>
              )}
            </>
          ))}
        </div>
      )}
      <div className="reviewHelpP" id="reviewHelpfulness">
        Helpful?
        <button type="button" className="reviewHelpP" name={review.review_id} onClick={putHelpfulness} onKeyDown={putHelpfulness}>
          Yes (
          {review.helpfulness}
          ) |
        </button>
        <button type="button" className="reviewHelpP" name={review.review_id} onClick={putReportReview} onKeyDown={putHelpfulness}>
          {' '}
          Report
        </button>
      </div>
    </div>
  );
};

export default ReviewsItem;
