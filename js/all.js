// Modal
// 開啟modal時，bootstrap替body增加了overflow:'hidden'
// 並替body,#navbar增加padding-right，造成整個畫面變寬
$('#reg_btn, #login_btn').on('click',function(){
  $('body,#navbar').css({
    overflow:'auto',
    paddingRight:0
  })
})

// section03生物種族
$('#race a').on('click', function () {
  $('#race a').removeClass('active')
  $(this).addClass('active')
})

// Swiper_____________________________________
const swiper = new Swiper('.swiper', {
  direction: 'horizontal',
  loop: true,
  speed: 1000,
  spaceBetween: 15,
  centeredSlides: true,
  autoplay: {
    delay: 10000
  },
  slidesPerView: 'auto',
  effect: 'coverflow',
  coverflowEffect: {
    rotate: 50,
    stretch: 0,
    depth: 100,
    modifier: 1,
    slideShadows: true,
  },
  breakpoints: {
    576: {
      slidesPerView: 2,
    },
    768: {
      slidesPerView: 3,
    },
    920: {
      slidesPerView: 3,
    },
    1200: {
      slidesPerView: 4,
    },
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  }
})

// GSAP______________________________________
// 註冊
gsap.registerPlugin(ScrollTrigger,ScrollToPlugin,SplitText);

$('#navbar .main-link').each(function(index){
  $(this).on('click', function(e){
    e.preventDefault();//阻止a連結預設動作
    if($(this).attr('href')==='#section04' || $(this).attr('href')==='#section05'){
      gsap.to($(window),{
    scrollTo: {
      y:`#section0${index+1}`,
    },
    duration:1.5,
    ease: 'back.inOut'
  })
    }else{
      gsap.to($(window),{
        scrollTo: {
          y:`#section0${index+1}`,
          offsetY:150
        },
        duration:1.5,
        ease: 'back.inOut'
      })
    }
    
  })
})