import React from 'react';
import Header from './Header';
import Section from './Section';
//Los proptypes, definer en tipo de data que entra como parametro del component (Ojo solo los componentes que tiene paracmetro)

const list = ['Redux', 'React-router', 'js']
const react = {
  // title : 'Este es mi SPA de react',
  img: 'react.png',
  paragraph : 'Librería de js que me permite trabajar las vistas de mi spa',
  contenido : 'Si quiero llegar a realizar una SPA potente debo conocer',
  cursos: ['Redux', 'React-router', 'js', 'Flux']
}


const App = () => (
  <div>
    <Header 
    title = {react.title}
    url = {react.img}
    paragraph = {react.paragraph}/>
    <Section contenido = {react.contenido} 
    arrayCursos = {react.cursos}/>
  </div>
)

export default App
