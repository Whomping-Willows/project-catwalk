/* eslint-disable react/prop-types */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable import/extensions */
import React, { useState } from 'react';
// import { ApiContext } from '../../contexts/api.context.jsx';
import ProductDescription from './productDescription.jsx';
import ProductGallery from './productGallery.jsx';
import ProductName from './productName.jsx';
import ProductStars from './productStars.jsx';
import ProductStyles from './productStyles.jsx';
import ProductCart from './productCart.jsx';

const Product = ({
  currentProduct, currentStyles, selectedStyle, setSelectedStyle,
}) => {
  const styleOptionClick = (e) => {
    e.preventDefault();
    e.persist();
    // console.log('Click Event: ', e);
    setSelectedStyle(Number(e.target.alt));
  };

  return (
    <div className="product">
      {currentStyles && currentProduct
        && (
          <>
            <div id="productFlex">
              <ProductGallery
                styles={currentStyles}
                selectedStyle={selectedStyle}
              />
              <div id="productInfoFlex">
                <ProductStars />
                <ProductName
                  product={currentProduct}
                />
                <ProductStyles
                  styles={currentStyles}
                  selectedStyle={selectedStyle}
                  styleClick={styleOptionClick}
                />
                <ProductCart />
              </div>
            </div>
            <ProductDescription
              currentProduct={currentProduct}
            />
          </>
        )}
    </div>
  );
};

export default Product;
