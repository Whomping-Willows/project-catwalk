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

const Product = (props) => {
  const [selectedStyle, setSelectedStyle] = useState(props.currentStyles.results[0].style_id);

  // useEffect(() => {
  //   setSelectedStyle(props.currentStyles.results[0].style_id);
  // });

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
