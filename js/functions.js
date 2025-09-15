import { expression, init } from "./app.js";
import { aSoni, bSoni, cAmal, elNumbersContainer, elNumbersTemplate, losePanel, nPoint, pPoint, setTimer } from "./html-elements.js";

export function getRandomNumber(number) {
    const result = Math.trunc(Math.random() * number) + 1;
    return result
}

export function getRandomNumberArray(number, expression) {
    let result = []

    while (true) {
        let randomNum = getRandomNumber(99);

        while (randomNum === expression) {
            randomNum = getRandomNumber(99)
        }
        
        result.push(randomNum)

        if (result.length === number) break;
    }

    return result;
}

export function readyRandomNumber(array, expression) {
    const randomIndex = getRandomNumber(array.length - 1)
    array[randomIndex] = expression
    return array
}

export function calc(expression) {
    let result;
    eval(`result=${expression}`)
    return result
}

export function uiChangerArray(array) {
    elNumbersContainer.innerHTML = "";

    for (let i = 0; i < array.length; i++) {
        const clone = elNumbersTemplate.content.cloneNode(true);
        const elSpan = clone.querySelector("span");

        elSpan.innerText = array[i];

        elNumbersContainer.append(clone);
    }
}

export function exampleShow(a,b,sign) {
    aSoni.innerText = a;
    bSoni.innerText = b;
    cAmal.innerText = sign;

    return aSoni, bSoni, cAmal;
}

export function counter(expression, userSelect) {
    let newPozPoint = parseInt(pPoint.textContent);
    let newNegPoint = parseInt(nPoint.textContent);

    readyNewPanel(newNegPoint, newPozPoint);
        
    if (userSelect === null) {
        newNegPoint += 1;
        nPoint.textContent = newNegPoint;
        init()
        return;
    }

    const userAnswer = Number(userSelect);

    if (userAnswer === expression) {
        newPozPoint++;
        pPoint.textContent = newPozPoint;
        init()
    } else {
        newNegPoint++;
        nPoint.textContent = newNegPoint;
        init()
    }
}


let timerInterval;
let timeLeft = 7;

export function startTimer() {
    clearInterval(timerInterval);

    timeLeft = 7; 
    setTimer.textContent = timeLeft;

    timerInterval = setInterval(() => {
        timeLeft--;
        setTimer.textContent = timeLeft;

        if (timeLeft <= 1) {
            clearInterval(timerInterval);
            counter(expression, null); 
        }
    }, 1000);
}

export function readyNewPanel(nPoint, pPoint) {
    if (pPoint < nPoint) {
        window.location.href = "../pages/lose-pages.html";
    }
}