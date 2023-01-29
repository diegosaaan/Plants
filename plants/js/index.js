// console.log(" Самооценка - 100 баллов\n\n1. При нажатии на кнопки:Gargens,Lawn,Planting происходит смена фокуса на услугах в разделе service +50\n2.Accordion в секции prices реализация 3-х выпадающих списков об услугах и ценах + 50\n3.В разделе contacts реализован select с выбором городов +25")

// localStorage.setItem("greeted", true);

// if (localStorage.getItem("greeted") !== true)
//   alert("Работа была выполнена в публичном репозитории, так как мне недоступен приватный репозиторий (политика GitHub).\n\nПожалуйста, оценивайте работу в соответсвии с критериями оценивания:\n\nhttps://github.com/rolling-scopes-school/tasks/blob/master/tasks/plants/plants-part3.md.\n\nНе забудьте, что при нахождении недочетов, баллы необходимо отнимать от 125, а не 100, и помните, что за неадекватное оценивание Вам дадут предупреждение.\n\nМой дискорд для связи:\nLoveeey-doveeey#9100.")

window.onkeydown = function(e) {
  return e.keyCode !== 32;
};

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

// ACCORDION

const accordionItem = document.querySelectorAll(".accordion__item");
const accordionTitle = document.querySelectorAll(".accordion__title");
const accordionIcon = document.querySelectorAll(".accordion__icon");
let accordionItemArray;
let indexOfOpenAccord = null;

const openAccrodion = (index) => {
  accordionItem[index].classList.add("accordion__item--active");
  accordionTitle[index].classList.add("accordion__title--active");
  accordionIcon[index].classList.add("accordion__icon--active");
}

const closeAccordion = (index) => {
  accordionItem[index].classList.remove("accordion__item--active");
  accordionTitle[index].classList.remove("accordion__title--active");
  accordionIcon[index].classList.remove("accordion__icon--active");
}

const accordionfunctional = (item, index) => {
  accordionItemArray = Array.from(accordionItem);

      accordionItemArray.forEach((i, index) => {
        if(i.classList.contains("accordion__item--active")) {
          indexOfOpenAccord = index;
        } 
      })
      
      if (indexOfOpenAccord === null) {
        openAccrodion(index);
      } else if (item.classList.contains("accordion__title--active")) {
        closeAccordion(index);
      } else if (indexOfOpenAccord !== null && item.classList.contains("accordion__title--active") == false) {
        closeAccordion(indexOfOpenAccord);
        openAccrodion(index);
      }
}

accordionItem.forEach((item, index) => {
  item.addEventListener("keydown", (e) => {
    if (e.keyCode == 32) {
      accordionfunctional(item, index);
    }
  });
});

  accordionTitle.forEach((item, index) => {
    item.addEventListener("click", () => {
      accordionfunctional(item, index);
  });
});


// SERVICE 

const itemGardens = document.querySelectorAll(".cards__item-gardens");
const itemLawn = document.querySelector(".cards__item-lawn");
const itemPlanting = document.querySelectorAll(".cards__item-planting");
const allItem = document.querySelectorAll(".cards__item");

const btnGardens = document.querySelector(".service__button--gardens");
const btnLawn = document.querySelector(".service__button--lawn");
const btnPlanting = document.querySelector(".service__button--planting");
const allBtn = document.querySelectorAll(".service__button");

allBtn.forEach(btn => {
  let btnArray = Array.from(allBtn);
  btn.addEventListener("click", (e) => {

    // Запрет на нажатие 3 кнопок одновременно

    let btnArrayLength = Array.from(allBtn);
    btnArrayLength = btnArrayLength.filter(btn => btn.classList.contains("btn--active")).length;

    if (btnArrayLength > 1 && btn.classList.contains("btn--active") == false) {
      alert("Вы не можете нажать одновременно 3 кнопки.");
    } else { 
      btn.classList.toggle("btn--active") 
    };

    // Если ни одна кнопка не нажата - убрать блюр

    if (btnArray.every(btn => btn.classList.contains("btn--active") == false)) {
      allItem.forEach(item => {
        item.classList.remove("service__item--active");
      })};

      // Добавлять блюр, если кнопка нажата

      if (btnGardens.classList.contains("btn--active") ) {
        itemLawn.classList.add("service__item--active");
  
        itemPlanting.forEach(item => {
          item.classList.add("service__item--active")
        });
      };
  
      if (btnLawn.classList.contains("btn--active")) {
  
        itemPlanting.forEach(item => {
          item.classList.add("service__item--active");
        });
  
        itemGardens.forEach(item => {
          item.classList.add("service__item--active");
        });
      };
  
      if (btnPlanting.classList.contains("btn--active") ) {
        itemLawn.classList.add("service__item--active");
  
        itemGardens.forEach(item => {
          item.classList.add("service__item--active");
        });
      };

      // Убирать блюр, если кнопка нажата
      
      if (btnGardens.classList.contains("btn--active")) {
        itemGardens.forEach(item => {
          item.classList.remove("service__item--active");
        })
      };
    
      if (btnLawn.classList.contains("btn--active")) {
        itemLawn.classList.remove("service__item--active");
      };
    
      if (btnPlanting.classList.contains("btn--active")) {
        itemPlanting.forEach(item => {
          item.classList.remove("service__item--active");
        })
      };
  });
});

// SERVICE

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

const toogleSelect = () => {
  iconSelect.classList.toggle("select__icon--clicked");
  choiceSelect.classList.toggle("contacts__city-choice--active");
  select.classList.toggle("select--shadow");
}

const choisefunctional = (item) => {
  
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
}

select.addEventListener('click', () => {
  toogleSelect()
});

select.addEventListener("keydown", (e) => {
  if (e.keyCode == 32) {
    toogleSelect()
  }
});

choiceItems.forEach(item => {
  item.addEventListener("click", () => {
    choisefunctional(item);
  });
  
  item.addEventListener("keydown", (e) => {
    if (e.keyCode == 32) {
      choisefunctional(item);
    }
  });
});
  



