import React from 'react';
import Item from './Item';
import PropTypes from 'prop-types';

const Lista = ({ cursos }) => (
  <ul>
    {cursos.map(curso => 
    <Item 
    curso = {curso}
    key = {curso}  />)}
  </ul>
)

Lista.propTypes = {
  cursos: PropTypes.array.isRequired
};

export default Lista;