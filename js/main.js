const darkMode = document.querySelector('.checkbox');

darkMode.addEventListener('change', () => {
    document.body.classList.toggle('darkMode');
});