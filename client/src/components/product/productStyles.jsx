/* eslint-disable array-callback-return */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable prefer-destructuring */
/* eslint-disable no-plusplus */
/* eslint-disable react/prop-types */
/* eslint-disable react/destructuring-assignment */
import React, { useState, useEffect } from 'react';
import Select from 'react-select';
// import Overlay from 'react-image-overlay';

const ProductStyles = (props) => {
  const styleData = props.styles.results;

  const sizeOp = [
    { value: 'XS', label: 'XS' },
    { value: 'S', label: 'S' },
    { value: 'M', label: 'M' },
    { value: 'L', label: 'L' },
    { value: 'XL', label: 'XL' },
    { value: 'XXL', label: 'XXL' },
  ];

  const [selectedSize, setSize] = useState('S');
  const [sizeOptions] = useState(sizeOp);
  const [quantityOptions, setQuantOptions] = useState([{ value: 0, label: 0 }]);

  const handleSizeChange = (item) => {
    setSize(item.value);
  };

  useEffect(() => {
    setQuantOptions(() => {
      // console.log('Current size: ', selectedSize);
      let totQuant = 0;
      styleData.map((data) => {
        if (data.style_id === props.selectedStyle) {
          // console.log('first setquant conditional: ', data);
          const skus = Object.entries(data.skus);
          skus.map((sku) => {
            // console.log('second setquant conditional: ', sku, sku[1].size);
            if (sku[1].size === selectedSize) {
              // console.log('third setquant conditional: ', sku[1].size);
              totQuant += sku[1].quantity;
            }
          });
        }
      });
      const result = [];
      for (let i = 1; i <= totQuant; i++) {
        result.push({ value: i, label: i });
      }
      // console.log('Quantity array: ', result);
      return result;
    });
  }, [selectedSize]);

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
      <p id="productPrice">
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
      return (<p id="styleName" key={`name${data.style_id}`}>{data.name}</p>);
    }
    return null;
  });

  const styleSelectors = styleData.map((data) => {
    if (data.style_id === props.selectedStyle) {
      return (
        <div
          className="styleOption"
          key={data.style_id}
          onClick={(e) => { props.styleClick(e); }}
        >
          <img
            className="styleImage"
            alt={data.style_id}
            key={`image${data.style_id}`}
            src={data.photos[0].thumbnail_url}
          />
          <div className="styleCheck">
            <i className="far fa-check-circle" key={`check${data.style_id}`} />
          </div>
        </div>
      );
    }
    return (
      <div
        className="styleOption"
        key={data.style_id}
        onClick={(e) => { props.styleClick(e); }}
      >
        <img
          className="styleImage"
          alt={data.style_id}
          key={`nocheck${data.style_id}`}
          src={data.photos[0].thumbnail_url}
        />
      </div>
    );
  });

  return (
    <div className="productStyles">
      <div id="productPrice">
        {price}
      </div>
      <span className="styleNameContainer">
        <p id="styleStyle">
          <b>
            Style
            {' > '}
          </b>
        </p>
        {styleName}
      </span>
      <div className="styleSelector">
        {styleSelectors}
      </div>
      <from className="sizingForm">
        <Select
          id="sizeSelector"
          options={sizeOptions}
          placeholder="SELECT SIZE"
          onChange={handleSizeChange}
          value={selectedSize.value}
        />
        <Select
          id="quantitySelector"
          options={quantityOptions}
          placeholder=""
        />
      </from>
    </div>
  );
};

export default ProductStyles;
