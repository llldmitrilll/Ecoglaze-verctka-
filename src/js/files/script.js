// Подключение функционала "Чертогов Фрилансера"
import { isMobile } from "./functions.js";
// Подключение списка активных модулей
import { flsModules } from "./modules.js";

async function bg() {
   const images = document.querySelectorAll(".bg");
   const fullscreen = document.querySelectorAll(".fullscreen-image");

   if (images.length > 0) {
      await Promise.all(
         await Object.keys(images).map(async (i) => {
            if (images[i].querySelector('source')) {
               fullscreen[i].style.backgroundImage = `url("${images[i].querySelector('source').getAttribute('srcset')}")`;
            } else if (images[i].querySelector('img')) {
               fullscreen[i].style.backgroundImage = `url("${images[i].querySelector('img').getAttribute('src')}")`;
            }
         })
      )
   }
}
bg().then(() => {
}).catch(err => {
   throw err;
})

const resizeImage = document.querySelector(".card-samples__resize");
const imageBefore = document.querySelector(".card-samples__image-before");
const imageAfter = document.querySelector(".card-samples__image-after");
const beforeAfter = document.querySelector(".card-samples__image-ibg")
console.log(resizeImage.querySelector('img').offsetWidth / 2);
console.log(beforeAfter.offsetLeft);
console.log(resizeImage.offsetLeft);


let isActive = false;
const ResazeImageHandler = beforeAfter.addEventListener('mousemove', (event) => {
   if (!isActive) return;
   event.stopPropagation();
   event.preventDefault();
   resizeImage.style.left = `${event.clientX - beforeAfter.offsetLeft}px`;
   imageBefore.style['clip-path'] = `inset(0px  0px 0px ${event.clientX - beforeAfter.offsetLeft}px)`;
   console.log(event.clientX);
})

resizeImage.addEventListener('mousedown', (event) => {
   isActive = true;
   ResazeImageHandler
})

resizeImage.addEventListener('mouseup', (event) => { isActive = false })




