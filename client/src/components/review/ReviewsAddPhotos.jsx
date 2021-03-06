/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable react/prop-types */
import React from 'react';

const ReviewsAddPhotos = ({ handleImageUpload, uploadedPhotos }) => (
  <form id="reviewsAddPhotosModal">
    <h3>Upload Your Photos</h3>
    <p>*up to 5 images</p>
    <input type="file" accept="image/*" multiple="false" onChange={handleImageUpload} />
    {uploadedPhotos.length > 0 && (
    <div>
      {uploadedPhotos.map((photo) => (
        <div className="reviewsUploadedPhotos">
          <img
            ref={photo}
            className="reviewsImg"
            alt={photo}
            name={photo}
            src={photo}
          />
        </div>
      ))}
    </div>
    )}
  </form>
);

export default ReviewsAddPhotos;
