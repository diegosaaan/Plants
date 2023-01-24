// console.log(" Самооценка - 75 баллов\n\n1. Вёрстка соответствует макету. Ширина экрана 768px +24\n2. Вёрстка соответствует макету. Ширина экрана 380px +24\n3. Ни на одном из разрешений до 320px включительно не появляется горизонтальная полоса прокрутки. Весь контент страницы при этом сохраняется: не обрезается и не удаляется +15\n4. На ширине экрана 380рх и меньше реализовано адаптивное меню +22\n")

// localStorage.setItem("greeted", true);

// if (localStorage.getItem("greeted") !== true)
//   alert("Работа была выполнена в публичном репозитории, так как мне недоступен приватный репозиторий (политика GitHub)\n\nПожалуйста, оценивайте работу в соответсвии с критериями оценивания:\n\nhttps://github.com/rolling-scopes-school/tasks/blob/master/tasks/plants/plants-part2.md\n\nНе забудьте, что при нахождении недочетов, баллы необходимо отнимать от 85, а не 75, и помните, что за неадекватное оценивание Вам дадут предупреждение\n\nМой дискорд:\nLoveeey-doveeey#9100")

  // Бургер

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

// Contacts

const select = document.querySelector(".select");
const titleSelectText = document.querySelector(".select__static");
const iconSelect = document.querySelector(".select__icon");
const choiceSelect = document.querySelector(".contacts__city-choice");
const choiceItems = document.querySelectorAll(".contacts__item");
const information = document.querySelector(".information");
const informationCity = document.querySelector(".information__right-item-city");
const informationTel = document.querySelector(".information__right-tel");
const informationAdress = document.querySelector(".information__right-item-adress");
const informationTelLink = document.querySelector(".information__right-link");
const contactsPhoto = document.querySelector(".contacts__photo");
const screenWidth = window.screen.width;

console.log(screenWidth)

if (screenWidth > 380) contactsPhoto.style = "visibility:visible";

const selectInformation = [
	{
		city: 'Yonkers, NY',
		tel: '+1 914 678 0003',
		adress: '511 Warburton Ave',
	},
	{
		city: 'Canandaigua, NY',
		tel: '+1 585 393 0001',
		adress: '151 Charlotte Street',
	},
	{
		city: 'Sherrill, NY',
		tel: '+1 315 908 0004',
		adress: '14 WEST Noyes BLVD',
	},
	{
		city: 'New York City',
		tel: '+1 212 456 0002',
		adress: '9 East 91st Street',
	}
]

select.addEventListener('click', () => {

  // Ивенты для Select
  iconSelect.classList.toggle("select__icon--clicked");
  choiceSelect.classList.toggle("contacts__city-choice--active");
  select.classList.toggle("select--shadow");
});

choiceItems.forEach(item => {
  item.addEventListener("click",() => {

    // Удаление изображения contacts__photo при ширине селекта 300px (380px адаптив)

    if (screenWidth <= 380) contactsPhoto.style = "visibility: hidden";

    // Ивенты для Select
    titleSelectText.textContent = item.textContent;
    select.classList.add("select--size");
    select.classList.add("select--color");
    choiceSelect.classList.remove("contacts__city-choice--active");
    select.classList.toggle("select--shadow");
    iconSelect.classList.remove("select__icon--clicked");

    // Ивенты для окна с информацией
    information.classList.add("information--active");
    informationCity.textContent = item.textContent.trim();

    selectInformation.forEach(obj => {
			if (obj.city == informationCity.textContent) {
				informationTel.textContent = obj.tel;
				informationAdress.textContent = obj.adress;
        informationTelLink.addEventListener('click', () => {
          window.location.href = 'tel:' + informationTelLink;
        })}
		});
  });
});
  



