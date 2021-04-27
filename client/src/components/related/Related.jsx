/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable no-console */
/* eslint-disable import/no-unresolved */
/* eslint-disable import/extensions */
import React, { useState, useEffect, useContext } from 'react';
import { ApiContext } from '../../contexts/api.context.jsx';

const Related = (props) => {
  const [relatedProductsIds, setRelatedProductsIds] = useState([]);
  const [related1, setRelated1] = useState();
  const [related1Styles, setRelated1Styles] = useState();
  const [related2, setRelated2] = useState();
  const [related2Styles, setRelated2Styles] = useState();
  const [related3, setRelated3] = useState();
  const [related3Styles, setRelated3Styles] = useState();
  const [related4, setRelated4] = useState();
  const [related4Styles, setRelated4Styles] = useState();

  const { end, getRequest } = useContext(ApiContext);

  const relatedCallback = (data) => {
    setRelatedProductsIds(data);

    const id1 = data[0];
    const id2 = data[1];
    const id3 = data[2];
    const id4 = data[3];

    getRequest(`https://app-hrsei-api.herokuapp.com/api/fec2/hr-bld/products/${id1}`, setRelated1);
    getRequest(`https://app-hrsei-api.herokuapp.com/api/fec2/hr-bld/products/${id1}/styles`, setRelated1Styles);

    getRequest(`https://app-hrsei-api.herokuapp.com/api/fec2/hr-bld/products/${id2}`, setRelated2);
    getRequest(`https://app-hrsei-api.herokuapp.com/api/fec2/hr-bld/products/${id2}/styles`, setRelated2Styles);

    getRequest(`https://app-hrsei-api.herokuapp.com/api/fec2/hr-bld/products/${id3}`, setRelated3);
    getRequest(`https://app-hrsei-api.herokuapp.com/api/fec2/hr-bld/products/${id3}/styles`, setRelated3Styles);

    getRequest(`https://app-hrsei-api.herokuapp.com/api/fec2/hr-bld/products/${id4}`, setRelated4);
    getRequest(`https://app-hrsei-api.herokuapp.com/api/fec2/hr-bld/products/${id4}/styles`, setRelated4Styles);
  };

  useEffect(() => {
    getRequest(end.relatedProducts, relatedCallback);
  }, []);

  return (
    <div className="related">
      {relatedProductsIds && (
      <>
        <h2 id="relatedProductsTitle">RELATED PRODUCTS</h2>
        <div id="relatedProducts">
          {related1 && related1Styles && (
            <div id="related1">
              <img
                className="relatedImg"
                id="relatedPic1"
                alt={related1.name}
                name={related1.id}
                onClick={props.handleRelatedChange}
                onKeyDown={props.handleRelatedChange}
                src="https://thumbor.forbes.com/thumbor/960x0/https%3A%2F%2Fblogs-images.forbes.com%2Flarryolmsted%2Ffiles%2F2017%2F10%2FTom-Cruise-Oblivion.jpg"
              />
              <div id="relatedInfo1">
                <h3 className="relatedInfo">{related1.name}</h3>
                <p className="relatedInfo">{`$${related1.default_price}`}</p>
              </div>
            </div>
          )}
          {related2 && related2Styles && (
            <div id="related2">
              <img
                className="relatedImg"
                id="relatedPic1"
                alt={related2.name}
                name={related2.id}
                onClick={props.handleRelatedChange}
                onKeyDown={props.handleRelatedChange}
                src={related2Styles.results[0].photos[0].thumbnail_url}
              />
              <div id="relatedInfo2">
                <h3 className="relatedInfo">{related2.name}</h3>
                <p className="relatedInfo">{`$${related2.default_price}`}</p>
              </div>
            </div>
          )}
          {related3 && related3Styles && (
            <div id="related3">
              <img
                className="relatedImg"
                id="relatedPic1"
                alt={related3.name}
                name={related3.id}
                onClick={props.handleRelatedChange}
                onKeyDown={props.handleRelatedChange}
                src={related3Styles.results[0].photos[0].thumbnail_url}
              />
              <div id="relatedInfo3">
                <h3 className="relatedInfo">{related3.name}</h3>
                <p className="relatedInfo">{`$${related3.default_price}`}</p>
              </div>
            </div>
          )}
          {related4 && related4Styles && (
            <div id="related4">
              <img
                className="relatedImg"
                id="relatedPic1"
                alt={related4.name}
                name={related4.id}
                onClick={props.handleRelatedChange}
                onKeyDown={props.handleRelatedChange}
                src={related4Styles.results[0].photos[0].thumbnail_url}
              />
              <div id="relatedInfo4">
                <h3 className="relatedInfo">{related4.name}</h3>
                <p className="relatedInfo">{`$${related4.default_price}`}</p>
              </div>
            </div>
          )}
        </div>
      </>
      )}
    </div>
  );
};

export default Related;
