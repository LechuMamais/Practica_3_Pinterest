import { getImages } from '../../methods/getImages';
import './header.css'

export const mostrarHeader = (app, divImages) =>{

    // Creamos el Header con JavaScript
    var header = document.createElement('header');
    var ul = document.createElement('ul');

    var li1 = document.createElement('li');
    li1.id = 'li1'
    var a = document.createElement('a');
    a.href = 'index.html';
    var img = document.createElement('img');
    img.src = 'assets/pinterest_logo.png';
    img.alt = 'Pinterest';
    a.appendChild(img);
    li1.appendChild(a);

    var li2 = document.createElement('li');
    li2.id = 'inicio';
    li2.textContent = 'Inicio';


    var li3 = document.createElement('li');
    li3.textContent = 'Explorar';
    li3.id = 'li3'


    var li4 = document.createElement('li');
    li4.textContent = 'Crear';
    li4.id = 'li4'


    var li5 = document.createElement('li');
    li5.id = 'li_search';
    var input = document.createElement('input');
    input.type = 'text';
    input.name = 'search';
    input.id = 'search';
    input.placeholder = '🔎 Buscar';

    //    ---------------         CAPTURAR EL VALOR DE INPUT              -------------------  //
    input.onkeydown = (event,divImages)=>{
        console.log(input.value);
        console.log(event.key);
        
        if(event.key.length===1){   // Si la tecla presionada es una letra
            getImages(input.value+event.key,divImages)
        }
    }
    li5.appendChild(input);


    var li6 = document.createElement('li');
    li6.className = 'circle_link';
    li6.textContent = '🔔';
    li6.id = 'li6'

    var li7 = document.createElement('li');
    li7.className = 'circle_link';
    li7.textContent = '💬';
    li7.id = 'li7'

    var li8 = document.createElement('li');
    li8.className = 'circle_link';
    li8.textContent = 'A';
    li8.id = 'li8'

    // Agregar elementos al DOM
    ul.appendChild(li1);
    ul.appendChild(li2);
    ul.appendChild(li3);
    ul.appendChild(li4);
    ul.appendChild(li5);
    ul.appendChild(li6);
    ul.appendChild(li7);
    ul.appendChild(li8);

    header.appendChild(ul);

    app.prepend(header);
 
}
