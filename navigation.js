const moreBtn = document.getElementById('more');
const dropMenu = document.getElementById('more-list');

moreBtn.addEventListener('click', function(event) {
    event.preventDefault();
    dropMenu.classList.toggle('show-menu');
});