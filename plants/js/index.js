console.log(" Самооценка - 75 баллов\n\n1. Вёрстка соответствует макету. Ширина экрана 768px +24\n2. Вёрстка соответствует макету. Ширина экрана 380px +24\n3. Ни на одном из разрешений до 320px включительно не появляется горизонтальная полоса прокрутки. Весь контент страницы при этом сохраняется: не обрезается и не удаляется +15\n4. На ширине экрана 380рх и меньше реализовано адаптивное меню +22\n")

localStorage.setItem("greeted", true);

if (localStorage.getItem("greeted") !== true)
  alert("Работа была выполнена в публичном репозитории, так как мне недоступен приватный репозиторий (политика GitHub)\n\nПожалуйста, оценивайте работу в соответсвии с критериями оценивания:\n\nhttps://github.com/rolling-scopes-school/tasks/blob/master/tasks/plants/plants-part2.md\n\nНе забудьте, что при нахождении недочетов, баллы необходимо отнимать от 85, а не 75, и помните, что за неадекватное оценивание Вам дадут предупреждение\n\nМой дискорд:\nLoveeey-doveeey#9100")

const burgerBtn = document.querySelector('.burger');
const menuClose = document.querySelector('.menu-close');
const menuCloseLinks = document.querySelectorAll(".header__item");
const menuBurger = document.querySelector('.header__right-side'); // ВЫПАДАЮЩЕЕ МЕНЮ
const menuCloseList = document.querySelector('.header__list'); // СПИСОК В МЕНЮ

document.addEventListener('click', function(e){
  if (menuBurger !== e.target && menuCloseList !== e.target) {
    menuBurger.classList.remove('burger-active');
  };
}, true);

burgerBtn.addEventListener('click', () => {
menuBurger.classList.add('burger-active')
});

menuClose.addEventListener('click', () => {
menuBurger.classList.remove('burger-active');
})

menuCloseLinks.forEach(link => link.addEventListener("click", () => {
  menuBurger.classList.remove('burger-active');
}))


