const acitvePage = document.location.pathname;
const navLinks = document.querySelectorAll ('nav').

forEach (link =>{
if (link.href.includes('${acitvePage}')){

  link.classList.add('active');

}
})
