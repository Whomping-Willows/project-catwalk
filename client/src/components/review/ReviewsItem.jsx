/* eslint-disable no-console */
/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable no-script-url */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable react/prop-types */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable import/extensions */
import React, { useContext, useState } from 'react';
import { Modal } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { ApiContext } from '../../contexts/api.context.jsx';
import ReviewsStars from './ReviewsStars.jsx';
import formatDate from '../../helpers/formatDate.js';

const ReviewsItem = (props) => {
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
    console.log(img);
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
        <ReviewsStars rating={props.review.rating} />
      </div>
      <div id="reviewSubTitleUserDate">
        {props.review.reviewer_name}
        ,
        {' '}
        {formatDate(props.review.date)}
      </div>
      <h3 id="reviewTitle">{props.review.summary}</h3>
      <p id="reviewBody">{props.review.body}</p>
      {props.review.recommend
        && (
          <div id="reviewIsRecDiv">
            <i className="fas fa-check" />
            <div id="reviewIsRec">I recommend this product</div>
          </div>
        )}
      {props.review.response
        && (
          <div id="reviewResponse">
            <p id="reviewResponseTitle">Response: </p>
            <p id="reviewResponseBody">{props.review.response}</p>
          </div>
        )}
      {props.review.photos.length > 0 && (

        <div id="reviewsPhotos">
          {props.review.photos.map((photo) => (
            <>
              <div className="reviewsPhotoDiv">
                <img
                  className="reviewsImg"
                  alt={props.review.name}
                  name={props.review_id}
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
                    alt={props.review.name}
                    name={props.review_id}
                    onClick={props.review.photos[0].url}
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
        <button type="button" className="reviewHelpP" name={props.review.review_id} onClick={putHelpfulness}>
          Yes (
          {props.review.helpfulness}
          ) |
        </button>
        <button type="button" className="reviewHelpP" name={props.review.review_id} onClick={putReportReview}>
          {' '}
          Report
        </button>
      </div>
    </div>
  );
};

export default ReviewsItem;
