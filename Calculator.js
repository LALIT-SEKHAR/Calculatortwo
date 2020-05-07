const clearr = document.querySelector('#clear');
const one = document.querySelector('#one');
const two = document.querySelector('#two');
const three = document.querySelector('#three');
const divider = document.querySelector('#divider');
const foure = document.querySelector('#foure');
const five = document.querySelector('#five');
const six = document.querySelector('#six');
const multiplay = document.querySelector('#multiplay');
const seven = document.querySelector('#seven');
const eight = document.querySelector('#eight');
const nine = document.querySelector('#nine');
const adition = document.querySelector('#adition');
const plusmines = document.querySelector('#plusmines');
const zero = document.querySelector('#zero');
const point = document.querySelector('#point');
const substration = document.querySelector('#substration');
const equal = document.querySelector('#equal');

const paratwo = document.querySelector('#displaypresent');
const paraone = document.querySelector('#displaypast');

const run = (value) => {
    // console.log(value);
    if (value*0 === 0) {
        paratwo.innerHTML = paratwo.innerHTML+value;
    } else {
        asiner(value)
    }
}

clear.addEventListener("click", () => cleareverything());
one.addEventListener("click", () => {run(one.innerHTML)});
two.addEventListener("click", () => {run(two.innerHTML)});
three.addEventListener("click", () => {run(three.innerHTML)});
divider.addEventListener("click", () => {run(divider.innerHTML)});
foure.addEventListener("click", () => {run(foure.innerHTML)});
five.addEventListener("click", () => {run(five.innerHTML)});
six.addEventListener("click", () => {run(six.innerHTML)});
multiplay.addEventListener("click", () => {run(multiplay.innerHTML)});
seven.addEventListener("click", () => {run(seven.innerHTML)});
eight.addEventListener("click", () => {run(eight.innerHTML)});
nine.addEventListener("click", () => {run(nine.innerHTML)});
adition.addEventListener("click", () => {run(adition.innerHTML)});
plusmines.addEventListener("click", () => {run(plusmines.innerHTML)});
zero.addEventListener("click", () => {run(zero.innerHTML)});
point.addEventListener("click", () => {run(point.innerHTML)});
substration.addEventListener("click", () => {run(substration.innerHTML)});
equal.addEventListener("click", () => calculate());

const asiner = (value) => {
    console.log(value);
    // paraone.innerHTML = paratwo.innerHTML + value
    paratwo.innerHTML = (paratwo.innerHTML + value);
}

//for calculate the total
const calculate = () => {
    // console.log(paraone.innerHTML);
    paraone.innerHTML = paratwo.innerHTML
    paratwo.innerHTML = eval(paratwo.innerHTML)
}

//clear everything
const cleareverything = () => {
    paratwo.innerHTML = 0;
    paraone.innerHTML = '';
}