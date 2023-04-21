const chat = document.querySelector('#content');
const mainElement = document.querySelector('main')
const navElement = document.querySelector('nav')
chat.addEventListener('click', () => {
    mainElement.classList.toggle("blurred-black");
    navElement.classList.toggle("blurred-black");
    document.body.style.overflow="hidden"

})
if (chat.childNodes.length > 0){
    mainElement.classList.add("");
    navElement.classList.add("");
}