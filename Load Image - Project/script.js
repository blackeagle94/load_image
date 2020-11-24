
const imgContainer = document.querySelector(".images");

const createImage = function (imgPath) {
  
  return new Promise ((resolve, reject) => {
     let img = document.createElement('img');
     img.src = imgPath;
     let imgClass = document.querySelector('.images');
     imgClass.appendChild(img)
     resolve
  })

}




//call createImage with then and catch



// create a wait function
const waitFor = function (second) {


}