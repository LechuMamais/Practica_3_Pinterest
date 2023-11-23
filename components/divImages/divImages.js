import './divImages.css'


export const mostrarDivImages = (app) => { 
    const divImages = document.createElement('div');
    divImages.classList.add('div-images');
    app.appendChild(divImages)
    
}