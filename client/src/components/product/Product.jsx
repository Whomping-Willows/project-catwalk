<<<<<<< HEAD
/* eslint-disable no-unused-vars */
=======
/* eslint-disable react/prop-types */
/* eslint-disable react/destructuring-assignment */
>>>>>>> 2a246245d170cdb01153a6fac33177b8771d1b3f
/* eslint-disable import/extensions */
import React, { useState, useContext, useEffect } from 'react';
import { ApiContext } from '../../contexts/api.context.jsx';
import ProductDescription from './productDescription.jsx';
import ProductGallery from './productGallery.jsx';
import ProductName from './productName.jsx';
import ProductStars from './productStars.jsx';
import ProductStyles from './productStyles.jsx';
import ProductCart from './productCart.jsx';

const Product = (props) => {
  const [selectedStyle, setSelectedStyle] = useState(props.currentStyles.results[0].style_id);

<<<<<<< HEAD
  useEffect(() => {
    getRequest(end.productStyles, setProductStyleData);
    getRequest(end.listInfo, setProductProductData);
  }, []);
=======
  // useEffect(() => {
  //   setSelectedStyle(props.currentStyles.results[0].style_id);
  // });
>>>>>>> 2a246245d170cdb01153a6fac33177b8771d1b3f

  return (
    <div className="product">
      {!props.loading
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
            setSelectedStyle={setSelectedStyle}
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
