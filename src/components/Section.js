import React from 'react';
import Lista from './Lista';
import PropTypes from 'prop-types';

const Section = ({contenido,arrayCursos}) => (
  <section>
    <p>{contenido}</p>
    <Lista cursos = {arrayCursos}/>
  </section>
)

Section.propTypes = {
  contenido: PropTypes.string.isRequired,
  arrayCursos: PropTypes.array.isRequired
};

export default Section;