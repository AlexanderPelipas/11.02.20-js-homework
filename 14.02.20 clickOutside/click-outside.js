const btns = document.querySelectorAll("button");
const outer = document.querySelector(".modal-outer");
const inner = document.querySelector(".modal-inner");
console.dir(outer);

function btnHandler(e) {
    const btn = e.target;
    const divCard = btn.parentElement;
    let img = divCard.querySelector("img");
    const src = img.src.replace(200, 400);
    const text = divCard.querySelector("h2").innerText;

    inner.innerHTML = `<img src="${src}" alt="${img.alt}"><h2>${text}</h2>`;
    outer.classList.add("open");
}

function outerHandler() {
    outer.classList.remove("open");
}

btns.forEach(btn => {
    btn.addEventListener("click", btnHandler);
});

outer.addEventListener("click", outerHandler);

window.addEventListener("keydown", e => {
    if ((e.key = "Escape")) {
        outerHandler();
    }
});