//  ------------------        FUNCION DE PINTAR LAS IMAGENES          --------------------  //

export const createImages = (imagesList, divImages) => {
    divImages = document.querySelector('.div-images')
    divImages.innerHTML = '';
    console.log(imagesList);
    if(imagesList.length==0 || imagesList=='undefined' || imagesList=='null'){
            console.log('sin resultados')
            let sinResultados= document.createElement('h3');
            sinResultados.textContent = 'Sin resultados';
            sinResultados.id = 'sin-resultados'
            divImages.appendChild(sinResultados);
        }else{
                for (let i = 0; i < imagesList.length; i++) {
        
        
        let image = document.createElement('img');
        image.src = imagesList[i].urls.thumb;
        let imageDiv = document.createElement('div');
        imageDiv.classList.add('image-card');
        imageDiv.append(image)
        divImages.appendChild(imageDiv);
    }
        }

}