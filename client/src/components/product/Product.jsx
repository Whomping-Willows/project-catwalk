/* eslint-disable react/prop-types */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable import/extensions */
import React, { useState, useEffect } from 'react';
// import { ApiContext } from '../../contexts/api.context.jsx';
import ProductDescription from './productDescription.jsx';
import ProductGallery from './productGallery.jsx';
import ProductName from './productName.jsx';
import ProductStars from './productStars.jsx';
import ProductStyles from './productStyles.jsx';
import ProductCart from './productCart.jsx';

const Product = (props) => {
  const [selectedStyle, setStyle] = useState(props.currentStyles.results[0].style_id);

  const styleOptionClick = (e) => {
    e.preventDefault();
    e.persist();
    // console.log('Click Event: ', e);
    setStyle(parseInt(e.target.alt));
  };

  return (
    <div className="product">
      {props.currentStyles && props.currentProduct
        && (
        <>
          <ProductGallery
            styles={props.currentStyles}
            selectedStyle={selectedStyle}
          />
          <ProductStars />
          <ProductName
            product={props.currentProduct}
          />
          <ProductStyles
            styles={props.currentStyles}
            selectedStyle={selectedStyle}
            styleClick={styleOptionClick}
          />
          <ProductCart />
          <ProductDescription
            currentProduct={props.currentProduct}
            loading={props.loading}
          />
        </>
        )}
    </div>
  );
};

export default Product;
