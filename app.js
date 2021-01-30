const hamburgerMenuIcon = document.querySelector('.hamburger');
const mobileMenu = document.querySelector('.mobile-menu');

const handleIconClick = () => {
    console.log('test');
    mobileMenu.classList.remove('hide')
}
const hamdleMenuClick = (e) => {
    console.log(e.target)
    mobileMenu.classList.add('hide')
}
hamburgerMenuIcon.addEventListener('click', handleIconClick);
mobileMenu.addEventListener('click', hamdleMenuClick);
