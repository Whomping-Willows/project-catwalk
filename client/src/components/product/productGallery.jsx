/* eslint-disable react/no-array-index-key */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/prop-types */
import React, { useState, useContext, useEffect } from 'react';

const ProductGallery = (props) => {
  const styleData = props.styles.results;

  const images = styleData.map((data) => {
    if (data.style_id === props.selectedStyle) {
      // console.log('Gallery Data: ', data.photos);
      return data.photos;
    }
  });

  const mainImage = () => (
    <img
      id="mainImage"
      alt={styleData[0].name}
      src={styleData[0].photos[0].url}
    />
  );

  const sideGallery = images[0].map((data, key) => (
    <div className="sideImgDiv">
      <img
        key={`photo${key}`}
        className="sideImage"
        alt="Not found"
        src={data.thumbnail_url}
      />
    </div>
  ));

  return (
    <div className="productGallery">
      {mainImage()}
      <div className="sideGallery">
        {sideGallery}
      </div>
    </div>
  );
};

export default ProductGallery;
