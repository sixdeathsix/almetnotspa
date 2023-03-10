const attrs = document.querySelectorAll('.attr');
const btns = document.querySelector('.attraction-filter');

btns.childNodes.forEach(btn => {
    btn.addEventListener('click', () => {
        attrs.forEach(attr => {
            attr.classList.remove('d-none')
            if (btn.classList.value === 'all') {
                attr.classList.remove('d-none')
            } else if(!attr.classList.contains(btn.classList.value)) {
                attr.classList.add('d-none');
            }
        });
    });
});