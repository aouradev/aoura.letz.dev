document.addEventListener("DOMContentLoaded", function() {
    setTimeout(function() {
        var loader = document.querySelector('.container');
        var homepage = document.querySelector('.homepage');

        loader.style.animation = 'fadeOut 0.7s forwards'; // Apply fade out animation
        homepage.classList.add('visible'); // Show homepage after loader fades out
    }, 700);
});
