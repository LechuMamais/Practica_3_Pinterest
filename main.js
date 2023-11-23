import { mostrarHeader } from './components/Header/header';
import { mostrarDivImages } from './components/divImages/divImages';
import { getImages } from './methods/getImages';
import './style.css'

const app = document.querySelector('#app');



mostrarDivImages(app);
const divImages = document.querySelector('.div-images')


mostrarHeader(app, divImages);

getImages('random',divImages) 