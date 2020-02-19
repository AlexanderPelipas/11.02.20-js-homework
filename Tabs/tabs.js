const jsButton = document.querySelector("#js");
const rubyButton = document.querySelector("#ruby");
const phpButton = document.querySelector("#php");

const jsPanel = document.querySelector('[aria-labelledby="js"]');
const rubyPanel = document.querySelector('[aria-labelledby="ruby"]');
const phpPanel = document.querySelector('[aria-labelledby="php"]');

let buttons = [jsButton, rubyButton, phpButton];
let panels = [jsPanel, rubyPanel, phpPanel];

let openPanel = function (event) {
    panels.forEach(function (panel) {
        panel.hidden = true;
    });
    buttons.forEach(function (button) {
        button.setAttribute("aria-selected",false);
    });
    const clickedBtn = event.currentTarget;
    clickedBtn.setAttribute("aria-selected", true);
    const num = clickedBtn.number;
    panels[num].hidden = false;
}

for (i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener("click", openPanel);
    buttons[i].number = i;
}









