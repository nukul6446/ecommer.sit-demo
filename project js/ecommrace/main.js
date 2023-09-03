

//scroll reveal Animation
const sr = ScrollReveal({
    origin:'top',
    distance:'60px',
duration: 2500,
delay:400,
//reset: true
})
sr.reveal('.home-text',{origin:'left'})
sr.reveal('.home-content',{origin:'right'})
sr.reveal('.heading',{ delay:200})
sr.reveal('.specs-details.box',{origin:'left',iterval:200})
sr.reveal('.specs-img',{delay:600})
sr.reveal('.spacs-details', { delay:200}) 
sr.reveal('.box', { delay:200})
sr.reveal('.footer-box ',{origin:'left',iterval:200})
