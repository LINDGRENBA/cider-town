import React from 'react';
import PropTypes from 'prop-types';


function CiderDetail(props) {
  const { cider } = props; 

  return (
    <React.Fragment>
      <h1>Cider Details: {cider.name}</h1>
      <div>
        <h3><em>{cider.brewery}</em></h3>
        <p>ABV: {cider.alcoholContent}% | Price: ${cider.price}.00</p>
      </div>
    </React.Fragment>
  );
}

CiderDetail.propTypes = {
  cider: PropTypes.object
};

export default CiderDetail;
