// кнопки числа
const btnOne = document.getElementById("numOne");
const btnTwo = document.getElementById("numTwo");
const btnThree = document.getElementById("numThree");
const btnFour = document.getElementById("numFour");
const btnFive = document.getElementById("numFive");
const btnSix = document.getElementById("numSix");
const btnSeven = document.getElementById("numSeven");
const btnEight = document.getElementById("numEight");
const btnNine = document.getElementById("numNine");
const btnZero = document.getElementById("numZero");
// кнопки операций
const btnSum = document.getElementById("sum");
const btnUnsum = document.getElementById("unSum");
const btnMul = document.getElementById("multiplicate");
const btnDel = document.getElementById("delit");
const btnProc = document.getElementById("procent");
const btnSqrt = document.getElementById("sqrt");

const outValue = document.getElementById("out-value");

const btnC = document.getElementById("c");
const btnResult = document.getElementById("result");

let valueArray = [];
let outVal = [];

// при нажатии на кнопку значение будет заносится в массив для значений,
// после чего при вызове функции с операциями значения из массива будут браться оттуда и выполняться операция а затем заноситься в новый массив на вывод
// 

let number1 = ''
let number2 = ''
let operator = ''

const render = () => {
    outValue.innerHTML = `${number1} ${operator} ${number2}`
}

const onNuberButtonClick = (event) => {
    const digit = event.target.innerText
    if (!operator) {
        number1 += digit
    } else {
        number2 += digit
    }
    render()
}

const onOperatorClick = (event) => {
    if (!number1) return

    let result = ''

    if (event.target.innerText === '%') {
        result = number1 / 100
    } else if (event.target.innerText === 'Sqrt') {
        result = Math.sqrt(number1)
    } else {
        operator = event.target.innerText
    }

    if (result) {
        clear()
        number1 = result
    }
    
    render()
}

const clear = () => {
    number1 = ''
    number2 = ''
    operator = ''
    render()
}

const onResultClick = () => {

    if (!number1 || !number2 || !operator) return

    switch (operator) {
        case '+':
        case '-':
        case '*':
        case '/':
            result = eval(number1 + operator + number2)
    }

    clear()
    number1 = result
    render()
    
}

Array.from(document.querySelectorAll('.button-number'))
    .forEach(button => {
        button.addEventListener('click', onNuberButtonClick)
    })

Array.from(document.querySelectorAll('.operator'))
    .forEach(operator => {
        operator.addEventListener('click', onOperatorClick)
    })

btnC.onclick = clear
btnResult.onclick = onResultClick

// btnOne.addEventListener('click', function(event){
//     // let objOne = {
//     //     valueOne : 1
//     // }
//     // valueArray.push(objOne);
//     // displayOut(valueArray)
//     if (!operator) {
//         number1 += '1'
//     } else {
//         number2 += '1'
//     }
// });

// btnTwo.addEventListener('click', function(){
//     let objTwo = {
//         valueTwo : 2
//     }
//     valueArray.push(objTwo);
//     displayOut(valueArray)
    
// });
// btnThree.addEventListener('click', function(){
//     let objThree = {
//         valueThree : 3
//     }
//     valueArray.push(objThree);
//     displayOut(valueArray)
    
// });
// btnFour.addEventListener('click', function(){
//     let objFour = {
//         valueFour : 4
//     }
//     valueArray.push(objFour);
//     displayOut(valueArray)
    
// });
// btnFive.addEventListener('click', function(){
//     let objFive = {
//         valueFive : 5
//     }
//     valueArray.push(objFive);
//     displayOut(valueArray)
    
// });
// btnSix.addEventListener('click', function(){
//     let objSix= {
//         valueSix : 6
//     }
//     valueArray.push(objSix);
//     displayOut(valueArray)
    
// });
// btnSeven.addEventListener('click', function(){
//     let objSeven = {
//         valueSeven : 7
//     }
//     valueArray.push(objSeven);
//     displayOut(valueArray)
    
// });
// btnEight.addEventListener('click', function(){
//     let objEight = {
//         valueEight : 8
//     }
//     valueArray.push(objEight);
//     displayOut(valueArray)
    
// });
// btnNine.addEventListener('click', function(){
//     let objNine = {
//         valueNine : 9
//     }
//     valueArray.push(objNine);
//     displayOut(valueArray)
    
// });
// btnZero.addEventListener('click', function(){
//     let objZero = {
//         valueZero : 0
//     }
//     valueArray.push(objZero);
//     displayOut(valueArray)

//     console.log(displayOut(valueArray))
// });

// console.log(valueArray)

// // сделать вывод массива в блок отпута

// function displayOut() {
//     let displayOut = '';
//     valueArray.forEach(function(item){ 
//         displayOut  += `
//         <p>
        
//        ${item}
//         </p>
//         `;
//      //   outValue.innerHTML = displayOut;
//     });
    
// }
// btnSum.addEventListener('click', function(){
//     let num1, num2, result;
//     num1 = valueArray;
//     num2 = valueArray;
//     result = num1- -num2;
//     console.log(result);
// });

