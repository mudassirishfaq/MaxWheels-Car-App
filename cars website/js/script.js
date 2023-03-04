let menu = document.querySelector('#menu-btn');
let navbar = document.querySelector('.navbar');

menu.onclick = () => {
  menu.classList.toggle('fa-times');
  navbar.classList.toggle('active');
}

document.querySelector('#login-btn').onclick = () => {
  document.querySelector('.login-form-container').classList.toggle('active');
}

document.querySelector('#close-login-form').onclick = () => {
  document.querySelector('.login-form-container').classList.remove('active');
}

window.onscroll = () => {

  menu.classList.remove('fa-times');
  navbar.classList.remove('active');

  if (window.scrollY > 0) {
    document.querySelector('.header').classList.add('active');
  } else {
    document.querySelector('.header').classList.remove('active');
  };

};

document.querySelector('.home').onmousemove = (e) => {

  document.querySelectorAll('.home-parallax').forEach(elm => {

    let speed = elm.getAttribute('data-speed');

    let x = (window.innerWidth - e.pageX * speed) / 90;
    let y = (window.innerHeight - e.pageY * speed) / 90;

    elm.style.transform = `translateX(${y}px) translateY(${x}px)`;

  });

};


document.querySelector('.home').onmouseleave = (e) => {

  document.querySelectorAll('.home-parallax').forEach(elm => {

    elm.style.transform = `translateX(0px) translateY(0px)`;

  });

};

var swiper = new Swiper(".vehicles-slider", {
  grabCursor: true,
  centeredSlides: true,
  spaceBetween: 20,
  loop: true,
  autoplay: {
    delay: 9500,
    disableOnInteraction: false,
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  breakpoints: {
    0: {
      slidesPerView: 1,
    },
    768: {
      slidesPerView: 2,
    },
    1024: {
      slidesPerView: 3,
    },
  },
});

var swiper = new Swiper(".featured-slider", {
  grabCursor: true,
  centeredSlides: true,
  spaceBetween: 20,
  loop: true,
  autoplay: {
    delay: 9500,
    disableOnInteraction: false,
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  breakpoints: {
    0: {
      slidesPerView: 1,
    },
    768: {
      slidesPerView: 2,
    },
    1024: {
      slidesPerView: 3,
    },
  },
});

var swiper = new Swiper(".review-slider", {
  grabCursor: true,
  centeredSlides: true,
  spaceBetween: 20,
  loop: true,
  autoplay: {
    delay: 9500,
    disableOnInteraction: false,
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  breakpoints: {
    0: {
      slidesPerView: 1,
    },
    768: {
      slidesPerView: 2,
    },
    1024: {
      slidesPerView: 3,
    },
  },
});


let newsLetterButton = document.querySelector("#newsletter-button");
let conformationNewsletter = document.querySelector(".confirmation_message-newsletter");
let newsletterInput = document.querySelector("#newsletter_input");
let errorNewsletter = document.querySelector(".error_message-newsletter")

newsLetterButton.onclick = () => {
  let value = newsletterInput.value;
  if (value == "") {
    errorNewsletter.classList.add("active");
  }
  conformationNewsletter.classList.add('active');
  setInterval(function () {
    conformationNewsletter.classList.remove('active');
    errorNewsletter.classList.remove("active");
    value = "'";
  }, 3000);
}

function clearfields(){
  document.querySelector("form").value = "";
}
let contactConfirmBtn = document.querySelector(".confirmation_message_contact");
let contactForm = document.querySelector(".contact form");
let contactBtn = document.querySelector(".contact .btn");
let contactFields = document.querySelector(".contact  form .box");
contactBtn.onclick = ()=>{
  let FieldsValue = contactFields.value;
  if(FieldsValue === ""){
    alert("Please Fill All  Fields First");
  }else{
    contactConfirmBtn.classList.add("active");
    contactForm.style.display = "none";
  
    
  }
 
}
setInterval(() => {
  contactConfirmBtn.classList.remove("active");
  contactForm.style.display = "block";
 
}, 5000);


function clear(){
  document.getElementById("newsletter-button").value = '';
}