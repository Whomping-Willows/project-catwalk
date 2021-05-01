/* eslint-disable array-callback-return */
/* eslint-disable react/no-array-index-key */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/prop-types */
import React, { useState, useEffect } from 'react';

const ProductGallery = (props) => {
  const styleData = props.styles.results;
  const [mainImage, setMainImage] = useState();
  const [images, setImages] = useState();

  // console.log(styleData);
  // console.log(props.selectedStyle);

  useEffect(() => {
    styleData.map((data) => {
      if (data.style_id === props.selectedStyle) {
        // console.log('Gallery Data: ', data.photos);
        setImages(data.photos);
        setMainImage(() => (
          <img
            id="mainImage"
            alt={data.name}
            src={data.photos[0].url}
          />
        ));
      }
    });
  }, [styleData, props.selectedStyle]);

  return (
    <div className="productGallery">
      {props.styles && props.selectedStyle
        && (
          <>
            {mainImage}
            <div className="sideGallery">
              <div className="sideImgDiv">
                {images
                  && images.map((innerData, key) => (
                    <img
                      key={`photo${key}`}
                      className="sideImage"
                      alt="Not found"
                      src={innerData.thumbnail_url}
                    />
                  ))}
              </div>
            </div>
          </>
        )}
    </div>
  );
};

export default ProductGallery;
