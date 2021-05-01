/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/prop-types */
import React from 'react';

const ProductName = (props) => (
  <div className="productName">
    <span>
      <p id="productCategory">{props.product.category}</p>
    </span>
    <span>
      <h3 id="productName">{props.product.name}</h3>
    </span>
  </div>
);

export default ProductName;
