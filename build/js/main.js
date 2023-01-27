
const mobileView = document.querySelector('#mobile-view');
const hamburger = document.querySelector('#hamburger');

const sidebar = () => {
    mobileView.classList.toggle('hidden');
    mobileView.classList.toggle('flex');
}
const removeSideBar = () => {
    mobileView.classList.toggle('flex');
    mobileView.classList.toggle('hidden');
}
