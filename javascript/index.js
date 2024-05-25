
 function enter()
{
  window.location = '../Asset1/index.html'

}
ScrollReveal({ 
    reset: true,
    distance :"60px",
    duration :2500,
    delay :400 
 });
    ScrollReveal().reveal('h1, h2', { delay: 200 , origin:'top'});

    ScrollReveal().reveal('.banner_img1,.banner_img2,.banner_img3,.banner_img4', { opacity:0, scale:0.8 ,interval: 600   });
   ScrollReveal().reveal('.banner_img5,.banner_img6,.banner_img7,.banner_img8', { opacity:0, scale:0.8 ,interval: 600   });