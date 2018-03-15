import React from 'react';
//import React, {component} from 'react';--> si es que etsan trabajando con POO
import {render} from 'react-dom'; // solo estas importando una función render del react DOM, cuando se trabaja con react funcional
import App from './components/app'

// render(componentePadre, document.getElementById('root')); //
render(<App/>, document.getElementById('root'));