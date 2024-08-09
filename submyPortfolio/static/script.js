var typed = new Typed (".multiple-text",{
strings:["Django Fullstack Developer","Frontend Developer","Postgresql Database Management","and many more...."], 
typeSpeed:120,
backSpeed:100,
backDelay:1000,
loop:true

})

document.addEventListener('DOMContentLoaded', function () {
  const menuToggle = document.getElementById('menu-toggle');
  const nav = document.getElementById('nav');

  menuToggle.addEventListener('click', function () {
      nav.classList.toggle('show');
  });
});

