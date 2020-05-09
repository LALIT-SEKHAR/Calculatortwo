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

//for background calculation
let calvalue;

const run = (value) => {
    // console.log(value);
    if (value*0 === 0) {
        //if the value is a number
        paratwo.innerHTML = paratwo.innerHTML+value;
        calvalue = calvalue+value;
        console.log(calvalue);
        if (calvalue === NaN) {
            console.log('ok');
        } else {
            console.log('not ok');
        }
    } else {
        //if the value is not a number
        // console.log(value);
        
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
// plusmines.addEventListener("click", () => {run(plusmines.innerHTML)});
zero.addEventListener("click", () => {run(zero.innerHTML)});
point.addEventListener("click", () => {run(point.innerHTML)});
substration.addEventListener("click", () => {run(substration.innerHTML)});
equal.addEventListener("click", () => calculate());


const asiner = (value) => {

    if ( value === '/' ) {
        
        // for not repiting the same assiner
        let a = (paratwo.innerHTML).lastIndexOf('/');
        let b = ((paratwo.innerHTML).length - 1);

        if ( a !== b ) {
            paratwo.innerHTML = (paratwo.innerHTML + '/');
            calvalue = calvalue + '/';
        }

    } else if ( value === 'X' ) {
        
        // for not repiting the same assiner
        let a = (paratwo.innerHTML).lastIndexOf('X');
        let b = ((paratwo.innerHTML).length - 1);

        if ( a !== b ) {
            paratwo.innerHTML = (paratwo.innerHTML + '*');
            calvalue = calvalue + '*';
            console.log(calvalue);
            
        }

    } else if ( value === '+' ) {
        
        // for not repiting the same assiner
        let a = (paratwo.innerHTML).lastIndexOf('+');
        let b = ((paratwo.innerHTML).length - 1);

        if ( a !== b ) {
            paratwo.innerHTML = (paratwo.innerHTML + '+');
            calvalue = calvalue + '+';
        }

    } else if ( value === '-' ) {
        
        // for not repiting the same assiner
        let a = (paratwo.innerHTML).lastIndexOf('-');
        let b = ((paratwo.innerHTML).length - 1);

        if ( a !== b ) {
            paratwo.innerHTML = (paratwo.innerHTML + '-');
            calvalue = calvalue + '-';
        }

    } else if ( value === '.' ) {

        // for not repiting the same assiner
        let a = (paratwo.innerHTML).lastIndexOf('.');
        let b = ((paratwo.innerHTML).length - 1);

        if ( a !== b ) {
            paratwo.innerHTML = (paratwo.innerHTML + '.');
            calvalue = calvalue + '.';
        }
        
    } 
    //TODO: for bracket (-)
    // else if ( value === '+/-' ) {
        
    //     // for not repiting the same assiner
    //     let a = (paratwo.innerHTML).lastIndexOf('+/-');
    //     let b = ((paratwo.innerHTML).length - 1);

    //     if ( a !== b ) {
    //         paratwo.innerHTML = (paratwo.innerHTML + '+/-');
    //         calvalue = calvalue + ;
    //     }

    // }


    // console.log(value);
    // // paraone.innerHTML = paratwo.innerHTML + value
    // paratwo.innerHTML = (paratwo.innerHTML + value);
}






//for calculate the total
const calculate = () => {
    // console.log(paraone.innerHTML);
    let a;
    let b;

    a = (paratwo.innerHTML).lastIndexOf('/');
    b = (paratwo.innerHTML).lastIndexOf('X');
    c = (paratwo.innerHTML).lastIndexOf('+');
    d = (paratwo.innerHTML).lastIndexOf('-');
    e = (paratwo.innerHTML).lastIndexOf('.');
    f = (paratwo.innerHTML).lastIndexOf('+/-');
    z = ((paratwo.innerHTML).length - 1);

    // console.log(a);
    // console.log(z);
    
    // for comparision for if any asiner in the last
    if( !( a === z || b === z || c === z || d === z || e === z || f === z )) {
        
        paraone.innerHTML = paratwo.innerHTML;
        paratwo.innerHTML = eval(paratwo.innerHTML);
        console.log(calvalue)
        

    }
}

//clear everything
const cleareverything = () => {
    paratwo.innerHTML = 0;
    paraone.innerHTML = '';
}