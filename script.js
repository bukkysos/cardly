let colors = ["chartreuse", "chocolate", "cornflowerblue", "darkorange", "pink", "darkorchid"]


let mainCardWrapper = document.getElementsByTagName("main")[0];
let cardsArr = [1, 2, 3, 4, 5, 6]
let cardss = cardsArr.map((number, index) => {
    let card = document.createElement("div");
    card.setAttribute("position", `${number}`)
    card.classList.add(`card`);
    card.classList.add(`${colors[index]}`);
    return card
})

cardss.forEach((card) => {
    card.addEventListener("click", () => handleSwap(card, cardss.length))
    mainCardWrapper.insertAdjacentElement("afterBegin", card)
})

var rect = cardss[0].getBoundingClientRect();
var main = mainCardWrapper.getBoundingClientRect();

const handleSwap = (card) => {
    const initialCardRect = card.getBoundingClientRect();
    card.style.zIndex = 2

    setTimeout(() => {
        card.style.transform = `translateX(${0}px)`;
        card.style.zIndex = 0
        mainCardWrapper.append(card)
    }, 500);

    card.style.transform = `translateX(${(rect.left - initialCardRect.left)}px)`;
}