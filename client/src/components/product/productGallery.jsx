/* eslint-disable react/no-array-index-key */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/prop-types */
import React, { useState, useContext, useEffect } from 'react';

const ProductGallery = (props) => {
  const styleData = props.styles.results;
  const [mainImage, setMainImage] = useState();
  const [images, setImages] = useState();

  // console.log(styleData);
  // console.log(props.selectedStyle);

<<<<<<< HEAD
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
=======
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
>>>>>>> 6faf9e95e3f2ff99f846d1953a0d58bff26e63ef

  return (
    <div className="productGallery">
      {props.styles && props.selectedStyle
        && (
          <>
            {mainImage}
            <div className="sideGallery">
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
          </>
        )}
    </div>
  );
};

export default ProductGallery;
