/* eslint-disable react/prop-types */
/* eslint-disable react/destructuring-assignment */
import React from 'react';

const ProductDescription = (props) => {
  const features = props.currentProduct.features.map((data) => {
    const feature = `${data.value} ${data.feature}`;
    return (
      <p key={data.feature} className="featureItem">
        <i className="fas fa-check" id="productCheck" />
        {feature}
      </p>
    );
  });

  return (
    <div className="productDescription">
      <h3 id="productSlogan">
        {props.currentProduct.slogan}
      </h3>
      <p id="productDesc">
        {props.currentProduct.description}
      </p>
      <i id="productVertLine" />
      <div id="featureList">
        {features}
      </div>
    </div>
  );
};

export default ProductDescription;
