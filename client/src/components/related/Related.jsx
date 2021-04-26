/* eslint-disable no-console */
/* eslint-disable import/no-unresolved */
/* eslint-disable import/extensions */
import React, { useState, useEffect, useContext } from 'react';
import { ApiContext } from '../../contexts/api.context.jsx';

const Related = () => {
  const [relatedProductsIds, setRelatedProductsIds] = useState([]);
  const [allRelated, setAllRelated] = useState([]);
  const [allRelatedStyles, setAllRelatedStyles] = useState([]);

  const { end, getRequest } = useContext(ApiContext);

  const addToRelated = (data) => {
    const oldData = allRelated.slice();
    oldData.push(data);
    setAllRelated(oldData);
  };

  const addToRelatedStyles = (data) => {
    const oldStyles = allRelatedStyles.slice();
    oldStyles.push(data);
    setAllRelatedStyles(oldStyles);
  };

  const relatedCallback = (data) => {
    setRelatedProductsIds(data);
    data.forEach((id) => {
      getRequest(`https://app-hrsei-api.herokuapp.com/api/fec2/hr-bld/products/${id}`, addToRelated);
      getRequest(`https://app-hrsei-api.herokuapp.com/api/fec2/hr-bld/products/${id}/styles`, addToRelatedStyles);
    });
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
            {allRelated[0] && (
              <div id="related1">
                <img id="relatedPic1" src={allRelatedStyles[0].results[0].photos[0].thumbnail_url
} />
                <div id="relatedInfo1">
                  <h3 className="relatedInfo">{allRelated[0].name}</h3>
                  <p className="relatedInfo">{`$${allRelated[0].default_price}`}</p>
                </div>
              </div>
            )}
            {allRelated[1] && (
              <div id="related2">
                <img id="relatedPic2" src="#" />
                <div id="relatedInfo2">
                  <h3 className="relatedInfo">{allRelated[1].name}</h3>
                  <p className="relatedInfo">{`$${allRelated[1].default_price}`}</p>
                </div>
              </div>
            )}
            {allRelated[2] && (
              <div id="related3">
                <img id="relatedPic3" src="#" />
                <div id="relatedInfo3">
                  <h3 className="relatedInfo">{allRelated[2].name}</h3>
                  <p className="relatedInfo">{`$${allRelated[2].default_price}`}</p>
                </div>
              </div>
            )}
            {allRelated[3] && (
              <div id="related4">
                <img id="relatedPic4" src="#" />
                <div id="relatedInfo4">
                  <h3 className="relatedInfo">{allRelated[3].name}</h3>
                  <p className="relatedInfo">{`$${allRelated[3].default_price}`}</p>
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
