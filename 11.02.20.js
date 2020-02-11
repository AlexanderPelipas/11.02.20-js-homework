// Создайте div
let div = document.createElement("div");
// добавьте класс "wrapper"
div.classList.add("wrapper");
// поместите его в body
document.body.prepend(div);
// создайте неупорядоченный список
let ul = document.createElement("ul");
// добавьте списку 3 элемента списка со словами: "один, два и три"
let arrLi = ["один", "два", "три"];
for (i = 0; i < arrLi.length; i++) {
    let elementLi = document.createElement("li");
    elementLi.innerHTML = arrLi[i];
    ul.append(elementLi);
}
// поместите этот список в предыдущий div
div.append(ul);
// создайте картинку
let img = document.createElement("img");
// установите src для картинки
img.src = "img/depositphotos_56467811-stock-photo-happy-golden-retriever-puppy.jpg";
// установите ширину картинки 250
img.style.width = "250px";
// добавьте картинке класс "cute"
img.className = "cute";
// добавьте картинке alt со значением "Cute Puppy"
img.alt = "Cute Puppy";
// добавьте картинку в существующий div.wrapper
div.append(img);
// используя HTML строку, создать div с двумя параграфами внутри.
let text = `<div><p>1</p><p>2</p></div>`;
let div2 = document.createRange().createContextualFragment(text);
// поместить этот div перед неупорядоченным списком
div.prepend(div2);
// добавить второму параграфу класс "warning"
let p = document.querySelectorAll("p");
p[1].className = "warning";
// удалите первый параграф
p[0].remove();
// создайте функцию которая называется "generatePlayerCard" и принимает на вход 3 аргумента: name, age, and height
let generatePlayerCard = function (name, age, height) {
    let html = `<div class="playerCard"><h2>${name} — ${age}</h2><p>They are ${height} and ${age} years old. In Dog years this person would be ${Math.round(age / 7)}. That would be a tall dog!</p></div>`;
    return html;
}
// эта функция должна возвращать вот такой HTML:
// <div class="playerCard">
//   <h2>NAME — AGE</h2>
//   <p>They are HEIGHT and AGE years old. In Dog years this person would be AGEINDOGYEARS. That would be a tall dog!</p>
// </div>
let divCards = document.createElement("div");
// создайте div с классом "cards"
divCards.className = "cards";
// Используя функцию создайте 4 карты
let numberOfCards = 4;
for (i = 0; i < numberOfCards; i++) {
    let divPlayerCard = document.createRange().createContextualFragment(generatePlayerCard("Tom", 20, 180));
// добавьте эти карты в div с классом "cards"
    divCards.append(divPlayerCard);
}
// поместите этот div в DOM перед .wrapper
div.before(divCards);
// Bonus,Не обязательно.
// поместите в каждую карту  кнопку которая по клику будет удалять карту
let playerCards = document.querySelectorAll(".playerCard");
for (let i = 0; i < playerCards.length; i++) {
    playerCards[i].append(document.createRange().createContextualFragment(`<input type = "button" value = "Delete Card"/>`));
}
// Выберете все кнопки
let buttons = document.querySelectorAll("input");
// Сделайте функцию для удаления карт
let deleteCard = function (j) {
    playerCards[j].remove();
}
// с помощью цикла поместите обработчик события на каждую кнопку
for (let i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener("click", function(e) {
        deleteCard(i);
    });
}