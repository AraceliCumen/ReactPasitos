import React from 'react';
import PropTypes from 'prop-types';

const Item = ({curso}) => (
  <li>{curso}</li>
)

Item.propTypes = {
  curso: PropTypes.string.isRequired
};

export default Item;