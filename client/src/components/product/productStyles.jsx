/* eslint-disable react/prop-types */
/* eslint-disable react/destructuring-assignment */
import React, { useState, useContext, useEffect } from 'react';
import Select from 'react-select';

const ProductStyles = (props) => {
  const styleData = props.styles.results;
  const sizeOptions = [
    { value: 'XS', label: 'XS' },
    { value: 'S', label: 'S' },
    { value: 'M', label: 'M' },
    { value: 'L', label: 'L' },
    { value: 'XL', label: 'XL' },
  ];
  const quantityOptions = [];

  const fontSizing = {
    fontSize: 16,
  };
  const priceSet = () => {
    const price = `$${styleData[0].original_price}`;
    const salePrice = `$${styleData[0].sale_price}`;
    if (styleData.sale_price) {
      return (
        <>
          <p id="productSalePrice">
            {salePrice}
          </p>
          <p id="productOrigPrice">
            {price}
          </p>
        </>
      );
    }
    return (
      <p id="productOrigPrice">
        {price}
      </p>
    );
  };

  const price = (
    <>
      {priceSet()}
    </>
  );
  const styleName = styleData.map((data) => {
    // console.log('StyleName conditional: ', data.name);
    if (data.style_id === props.selectedStyle) {
      return (<p id="styleName" key={data.style_id} style={fontSizing}>{data.name}</p>);
    }
    return null;
  });

  const styleSelectors = styleData.map((data) => (
    <img
      className="styleOption"
      key={data.style_id}
      alt={data.name}
      src={data.photos[0].thumbnail_url}
    />
  ));

  return (
    <div className="productStyles">
      <div id="productPrice">
        {price}
      </div>
      <span className="styleNameContainer">
        <p id="styleStyle" style={fontSizing}>
          <b>
            Style
            {' > '}
          </b>
        </p>
        {styleName}
      </span>
      <div>
        <div className="styleSelector">
          {styleSelectors}
        </div>
      </div>
      <from className="sizingForm">
        <Select id="sizeSelector" options={sizeOptions} />
        <Select id="quantitySelector" options={quantityOptions} />
      </from>
    </div>
  );
};

export default ProductStyles;
