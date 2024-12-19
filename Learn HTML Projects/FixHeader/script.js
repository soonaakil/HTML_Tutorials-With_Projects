// Add scroll effect to the header
window.addEventListener('scroll', function() {
    const header = document.querySelector('.header');
    if (window.scrollY > 50) { // When scrolled down 50px
        header.classList.add('scrolled');
    } else {
        header.classList.remove('scrolled');
    }
});
