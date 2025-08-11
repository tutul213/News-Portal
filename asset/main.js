/*========== Header Section ===========*/
const navBer = document.querySelector("#navBer");
const navMenu = document.querySelector("#nav-menu");
const menuBtn = document.querySelector("#menuBtn");
const closeBtn = document.querySelector("#closeBtn");

menuBtn.onclick = ()=>{
    navBer.classList.add("active");
}


closeBtn.onclick = ()=>{
    navBer.classList.remove("active");
}


document.querySelectorAll(".dropMenu").forEach(menu => {
  menu.addEventListener("click", (e) => {
      const dropdown = e.target.closest("li").querySelector(".dropDown_menu");
      dropdown.classList.toggle("active");
  });
});






/*========== Tabs Section ===========*/

const tabsLink = document.querySelectorAll(".main_tabs_items");
const contents = document.querySelectorAll(".main_tabs_content");

tabsLink.forEach((buttons, contentbox) =>{
  buttons.addEventListener("click", () =>{
      tabsLink.forEach(buttons =>{
           buttons.classList.remove("active");
        });
        buttons.classList.add("active");

        contents.forEach(contents =>{
          contents.classList.remove("active");
        });
        contents[contentbox].classList.add("active");
    })
})






/*========== Header Scroll Section ===========*/
const headerNavber = document.querySelector("#header");



window.onscroll = function () {
  if(document.documentElement.scrollTop > 20){
     headerNavber.classList.add("active");
  }else{
     headerNavber.classList.remove("active");
  }
}







// Animation on Scroll initializing
AOS.init();



/*========== Hero Section ===========*/

var swiper = new Swiper(".ortho_banner_container", {
    spaceBetween: 24,
    loop: true,
    autoplay: {
      delay: 3000,
      disableOnInteraction: false,
  },
  pagination: {
    el: ".swiper-pagination",
    dynamicBullets: true,
  },
    navigation: {
      nextEl: ".fa-angle-right",
      prevEl: ".fa-angle-left",
    },
    
    breakpoints: {
      350: {
        slidesPerView: 1,
        spaceBetween: 20,
      },
      700: {
        slidesPerView: 1,
        spaceBetween: 40,
      },
      1200: {
        slidesPerView: 1,
        spaceBetween: 24,
      },
    },
  });
