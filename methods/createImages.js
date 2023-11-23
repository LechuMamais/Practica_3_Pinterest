//  ------------------        FUNCION DE PINTAR LAS IMAGENES          --------------------  //

export const createImages = (imagesList, divImages) => {
    divImages = document.querySelector('.div-images')
    divImages.innerHTML = '';
    for (let i = 0; i < imagesList.length; i++) {
        let image = document.createElement('img');
        image.src = imagesList[i].urls.thumb;
        let imageDiv = document.createElement('div');
        imageDiv.classList.add('image-card');
        imageDiv.append(image)
        divImages.appendChild(imageDiv);
    }
}