
const imgContainer = document.querySelector(".images");

const createImage = function (imgPath) {
  
  return new Promise ((resolve, reject) => {
    
        let img = document.createElement('img');
        img.src = imgPath;
        let imgClass = document.querySelector('.images');
        imgClass.appendChild(img)

        img.addEventListener('load', function () {
          imgClass.appendChild(img)
          resolve (img);
        })

        img.addEventListener('error', function () {
          reject (new Error('Something went wrong'))
        })
        
    
     
     
  })

}


//call createImage with then and catch
createImage('./images/img-1.jpg')
.then(img => {
  currentImg = img;
  console.log('Image 1 loaded.');
  return waitFor(2)
})
.then(() => {
  currentImg.style.display = 'none';
  return createImage('./images/img-2.jpg')
})
.then(img => {
  currentImg = img;
  console.log('Image 2 loaded.');
  return waitFor(2)
})
.then(() => {
  currentImg.style.display = 'none';
  return createImage('./images/img-3.jpg')
})
.then(img => {
  currentImg = img;
  console.log('Image 3 loaded.');
  return waitFor(2)
})
.then(() => {
  let btn = document.querySelector('#btn');
  let body = document.getElementsByTagName('BODY')[0];
  body.addEventListener('keypress', function(e) {
      if (e.code === 'Space') {
        location.reload()
      }
  })
  btn.style.display = 'block'
  btn.addEventListener('click', function() {
    location.reload()
  })
})
.catch(error => {
  console.log(error)
});


// create a wait function
const waitFor = function (second) {
    return new Promise((resolve) => {
      setTimeout(resolve, second * 1000)
    })

}

