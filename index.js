const imageContainerElem = document.querySelector(".container")

const prevElem = document.getElementById("prev");
const nextElem = document.getElementById("next");
let pauseElem = document.getElementById("pause");

let x = 0
let timer;
prevElem.addEventListener("click", ()=> {
  x += 45;
  clearTimeout(timer);
  updateGallery()
})
nextElem.addEventListener("click", ()=> {
  x -= 45;
  clearTimeout(timer);
  updateGallery()
})
// pauseElem.addEventListener("click", ()=> {
//   pauseElem.innerText === "Pause" ? pauseElem.innerText === "Resume" : pauseElem.innerText === "Pause"
// })


function updateGallery() {
  imageContainerElem.style.transform = `
    perspective(1000px) rotateY(${x}deg)
  `
  timer = setTimeout( ()=> {
    x -= 45;
    updateGallery()
  }, 4500)
}

updateGallery()
   



// pauseElem.addEventListener('click', function() {
//   const container = document.querySelector('.container');
//   if (container.classList.contains('paused')) {
//     container.classList.remove('paused');
//     this.innerText = 'Pause';
//   } else {
//     container.classList.add('paused');
//     this.innerText = 'Resume';
//   }
// });

// pauseElem.addEventListener('click', pauseResumeGallery);

// function pauseResumeGallery() {
//   const container = document.querySelector('.container');
//   if (container.classList.contains('paused')) {
//     container.classList.remove('paused');
//     this.innerText = 'Pause';
//   } else {
//     container.classList.add('paused');
//     this.innerText = 'Resume';
//   }
// }

// pauseResumeGallery()