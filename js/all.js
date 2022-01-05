// Modal
// 開啟modal時，bootstrap替body增加了overflow:'hidden'
// 並替body,#navbar增加padding-right，造成整個畫面變寬
$('#reg_btn, #login_btn').on('click',function(){
  $('body,#navbar').css({
    overflow:'auto',
    paddingRight:0
  })
})

// GSAP______________________________________
// 註冊
gsap.registerPlugin(ScrollTrigger,ScrollToPlugin,SplitText);