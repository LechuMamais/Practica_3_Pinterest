import { createImages } from "./createImages";

//  --------------------------------------------------------     UNSPLASH - API REST    -------------------------------------------------------  //


// Para comunicarnos correctamente con el servidor
const accesKey = 'hHjepr9fJX6QxqedjkNvtwCjs5RvIgFmKyMjcAbJVZI';
const endPoint = 'https://api.unsplash.com/search/photos';
const divImages = document.querySelector('.div-images')

export async function getImages(query, divImages) {
    
    // Mediante fetch se comunica con el endpoint de unsplash le envía una palabra para que sea el parametro de busqueda,
    // y además le envía nuestro accesKey para que el API nos pueda reconocer y se comunique con nosotros.
    let response = await fetch(endPoint + '?query=' + query + '&client_id=' + accesKey);
    // Y le pedimos que procese el JSON que nos devuelve al API
    let jsonResponse = await response.json();

    let imagesList = await jsonResponse.results;        // array con los urls de las imágenes que nos respondió el API de Unsplash
    createImages(imagesList, divImages);           // Llamamos a la función que pinta las imagenes en el dom
}