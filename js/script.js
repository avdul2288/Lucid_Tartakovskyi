document.addEventListener('DOMContentLoaded', function () {
    const openBtn = document.querySelector('.open-menu');
    const closeBtn = document.querySelector('.nav-close');
    const menu = document.querySelector('.nav-menu');

    openBtn.addEventListener('click', function () {
        menu.classList.add('active');
        openBtn.style.display = 'none';
    });

    closeBtn.addEventListener('click', function () {
        menu.classList.remove('active');
        openBtn.style.display = 'block';
    });
});
