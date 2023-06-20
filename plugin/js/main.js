/* top_btn */

const topBtn =document.querySelector('.top_btn')

window.addEventListener('scroll', ()=>{
    if(window.scrollY > 200){
        gsap.to(topBtn, 0.3, {
            opacity: 1
        })
    }else{gsap.to(topBtn, 0.3, {
        opacity: 0
    })
    }
})//window_scroll_event


topBtn.addEventListener('click', ()=>{
    gsap.to(window, 0.5, {
        scrollTo: 0
    })
}) // top버튼 누르면 상단으로 이동





/* img_ box */
const imgEls = document.querySelectorAll('.img_box div')

imgEls.forEach((imgEl, index) => {
    gsap.to(imgEl, 2, {
        delay: index * 0.5,
        opacity: 1
    })
})


/* txt_box */
const txtEls = document.querySelectorAll('.txt_box div')

window.addEventListener('scroll',()=>{
    if(window.scrollY > 500){
        gsap.to(txtEls[0], 0.5,{
            delay: 0,
            opacity:1  
            })
        gsap.to(txtEls[1], 0.5,{
            delay: 0.5,
            opacity:1  
            })
        gsap.to(txtEls[2], 0.5,{
            delay: 1,
            opacity:1  
            })
    } //if
})


/*visual_swiper*/
const swiper = new Swiper('.swiper', {
    
    loop: true,
    autoplay:{
        delay: 3000
    },

    slidesPerView: 3,
    //sliderPerview: 보여지는 이미지개수
    spaceBetween:10,

    navigator: {
        pervEl: '.swiper-button-prev',
        nextEl: '.swiper-button-next'
    },

    pagination: {
        el: '.swiper-pagination',
        clickable: true
    }
})

/*not box*/

const notEls = document.querySelectorAll('.not_box')
notEls.forEach((notEl) => {
    new ScrollMagic
    .Scene({
        triggerElement: notEl,
        triggerHook: 0.3})
    .setClassToggle(notEl, 'show')
    .addTo(new ScrollMagic.Controller)
})
