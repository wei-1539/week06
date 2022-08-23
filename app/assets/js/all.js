// $(function() {
//   console.log('Hello Bootstrap5');
// });

// const item = document.querySelector(".info .info_item");
// const line = document.querySelector("#line");
// const icon = document.querySelector(".info .info_icon");

// item.addEventListener("mouseover",()=>{
//   console.log(`jlfsj`);
//   line.classList.toggle("color");
//   icon.classList.toggle("color");
// })


// Swiper
const swiper = new Swiper('.swiper', {
  
  // Optional parameters
  effect: 'fade',
  fadeEffect: {
    crossFade: true
  },
  
  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
  },

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
});