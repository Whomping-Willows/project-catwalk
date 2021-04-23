/* eslint-disable import/extensions */
import React, { useState, useContext, useEffect } from 'react';
import { ApiContext } from '../../contexts/api.context.jsx';
import ProductDescription from './productDescription.jsx';
import ProductGallery from './productGallery.jsx';
import ProductName from './productName.jsx';
import ProductStars from './productStars.jsx';
import ProductStyles from './productStyles.jsx';
import ProductCart from './productCart.jsx';

const Product = () => {
  const [productProductData, setProductProductData] = useState();
  const [productStyleData, setProductStyleData] = useState();
  const { end, getRequest } = useContext(ApiContext);

  useEffect(() => {
    getRequest(end.productStyles, setProductStyleData);
    getRequest(end.listInfo, setProductProductData);
  },[]);

  return (
    <div className="product">
      <ProductGallery />
      <ProductStars />
      <ProductName />
      <ProductStyles />
      <ProductCart />
      <ProductDescription />
    </div>
  );
};

export default Product;
