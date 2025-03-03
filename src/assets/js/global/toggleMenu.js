const toggleMenu = () => {
    const menu = document.querySelector('.header_menu')
    const btnToggle = document.querySelector('.header_openClose')

    btnToggle.addEventListener('click', function(evt) {
        if (menu.style.display == 'block') {
            menu.style.display = 'none'
        } else {
            menu.style.display = 'block'
        }
    })
}

export default toggleMenu