// Выполнить все задачи в теге script. Комментарии, в которых написаны задачи, не
// стирать, код с решением задачи пишем под комментарием.

"use strict";
// ``
// []()
// []()
// 1. Найти по id, используя getElementById, элемент с id равным "super_link" и вывести этот элемент в консоль.
// []()
const superLink = document.getElementById("super_link");
console.log(superLink);

// 2. Внутри всех элементов на странице, которые имеют класс "card-link", поменяйте текст внутри элемента на "ссылка".
// []()
const cardLinks = document.querySelectorAll(".card-link");
cardLinks.forEach((link) => {
  link.textContent = "ссылка";
});
console.log(cardLinks);

// 3. Найти все элементы на странице с классом "card-link", которые лежат в элементе с классом "card-body" и вывести полученную коллекцию в консоль.
// []()
const cardBodyLinks = document.querySelector(".card-body").querySelectorAll(".card-link");
console.log(cardBodyLinks);

// 4. Найти первый попавшийся элемент на странице у которого есть атрибут data-number со значением 50 и вывести его в консоль.
// []()
const elementDataNumber = document.querySelector("[data-number='50']")
console.log(elementDataNumber);
// 5. Выведите содержимое тега title в консоль.
// []()
console.log(document.title);
// 6. Получите элемент с классом "card-title" и выведите его родительский узел в консоль.
// []()
const parentTitle = document.querySelector(".card-title")
console.log(parentTitle.parentNode);
// 7. Создайте тегp`, запишите внутри него текст "Привет" и добавьте созданный тег в начало элемента, который имеет класс "card".
const newParagraph = document.createElement("p");
newParagraph.textContent = "Привет";
const cardElement = document.querySelector(".card");
cardElement.prepend(newParagraph);
// 8. Удалите тег h6 на странице.
const h6Element = document.querySelector("h6");
h6Element.remove();
