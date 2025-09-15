import { mathSigns } from "./constans.js"
import { calc, counter, exampleShow, getRandomNumber, getRandomNumberArray, readyRandomNumber, startTimer, uiChangerArray } from "./functions.js"
import { elNumbersContainer, firstPanel, rulesButton, rulesPanel, startButton } from "./html-elements.js";

export let expression;

startButton.addEventListener("click", () => {
    firstPanel.classList.add("hide");
    rulesPanel.classList.add("show");
    
})

rulesButton.addEventListener("click", () => {
    rulesPanel.classList.add("hide");
    setTimeout(() => {
        rulesPanel.classList.add("hidden")
    }, 1000)
    init();
})

export function init() {
    startTimer()
    let a = getRandomNumber(9);
    let b = getRandomNumber(9);
    const signIndex = getRandomNumber(mathSigns.length - 1)
    const sign = mathSigns[signIndex]

    if (sign === "/") {
        while (a < b || a % b !== 0) {
            a = getRandomNumber(9)
            b = getRandomNumber(9)
        }
    }

    expression = calc(`${a}${sign}${b}`);

    const array = getRandomNumberArray(16, expression)

    const readyArray = readyRandomNumber(array, expression)

    exampleShow(a,b,sign)

    uiChangerArray(readyArray)
}

elNumbersContainer.addEventListener("click", (evt) => {
    let userrSelect = evt.target.textContent;
    counter(expression, userrSelect)
})