window.addEventListener('scroll', function() {
    var navbar = document.querySelector('nav');
    if (window.scrollY > 10) { 
        navbar.style.backgroundColor = 'var(--primary-color)'; 
    } else {
        navbar.style.backgroundColor = 'var(--white)'; 
    }
});



  