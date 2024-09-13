document.addEventListener('DOMContentLoaded', function() {
    const menuBtn = document.querySelector('.menu-btn');
    const sidebar = document.querySelector('.sidebar');
    const closeBtn = document.querySelector('.close-btn');

    menuBtn.addEventListener('click', function() {
        sidebar.classList.add('open');
    });

    closeBtn.addEventListener('click', function() {
        sidebar.classList.remove('open');
    });
});
