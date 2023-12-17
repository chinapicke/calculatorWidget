const numberGrid = document.querySelector('.numberGrid');
const displayInput = document.querySelector('.inputDisplay');
const rightSideColumn = document.querySelector('.symbols');
const rightSideColumnChildren = rightSideColumn.childNodes;
const zeroBtn = document.getElementById('zero');
const dotBtn = document.getElementById('dot');
const deleteBtn = document.getElementById('del');
const clearBtn = document.getElementById('clear');
const percentageBtn = document.getElementById('percent');
const sumBtn = document.getElementById('sum');
const colourChange = document.querySelectorAll('.form-check-input');
const calculatorContainer = document.querySelector('.calculatorContainer');
const calculatorBtns = document.querySelector('.calculatorBtns');
const tabTitle = document.querySelector('.tabTitle')
const colourDiv = document.querySelector('.colourChange')



// show and hide theme button 
tabTitle.addEventListener('click', function(){
    if(colourDiv.style.display === 'none')
    {
        colourDiv.style.display = 'block'
    }
    else{
        colourDiv.style.display = 'none'

    }
})



// create buttons for all of the number for 1 to 9
// add click functions to all the buttons that return the value that has been clicked
let numberCount = 0;

for (let i = 1; i <= 9; i++) {
    const buttons = document.createElement('button');
    buttons.value = i;
    buttons.innerHTML = `${i}`;
    buttons.addEventListener('click', function (e) {
        numberCount++;
        displayInput.innerText += e.target.value
        console.log(numberCount)
    });
    numberGrid.append(buttons);
}

console.log(numberCount)

// create a count of 0 so that this limits the symbols to be pressed more than once in each instance
let symbolCount = 0;

for (let i = 0; i <= rightSideColumnChildren.length - 1; i++) {
    if (i % 2 !== 0) {
        rightSideColumnChildren[i].addEventListener('click', function (e) {
            if (symbolCount >= 1 && numberCount == 0) {
                rightSideColumnChildren.setAttribute('disabled', true)
            }
            else {
                symbolCount++;
                displayInput.innerHTML += e.target.value;
            }
        })
    }
}

// display zero number

zeroBtn.addEventListener('click', function (e) {
    displayInput.innerHTML += e.target.value;
})

let dotCount = 0;

dotBtn.addEventListener('click', function (e) {
    if (dotCount >= 1) {
        dotBtn.setAttribute('disabled', true)
    }
    else {
        dotCount++;
        displayInput.innerHTML += e.target.value;
    }
})


// delete button
deleteBtn.addEventListener('click', function () {
    // slice function to remove last element, -1 achieves this// slice arguments take in where the index 
    // starts and end
    displayInput.innerHTML = displayInput.innerHTML.slice(0, -1)
})

// clear button
symbolCount = 0;
    dotCount = 0;
    numberCount = 0;
// replaces displayInput with empty string
clearBtn.addEventListener('click', function () {
    displayInput.innerText = '';
})

// percentage button 
percentageBtn.addEventListener('click', function(e){
    // converts the displauInput.innerHTML to a decimal of itself
    const percentageValue = parseFloat(displayInput.innerHTML)
    displayInput.innerHTML = percentageValue / 100
})


sumBtn.addEventListener('click', function () {
    // onClick increase symbolCount and then return/disable click for other symbol buttons
    let inputOutcome = displayInput.innerHTML;
    symbolCount = 0;
    dotCount = 0;
    numberCount = 0;
    if (inputOutcome.includes('+')) {
        console.log('plus was clicked');
        const splitInput = inputOutcome.split('+');
        const sum = parseFloat(splitInput[0]) + parseFloat(splitInput[1]);
        displayInput.innerHTML = sum;
    }
    else if (inputOutcome.includes('-')) {
        console.log('minus was clicked')
        const splitInput = inputOutcome.split('-');
        const sum = parseFloat(splitInput[0]) - parseFloat(splitInput[1]);
        displayInput.innerHTML = sum;
    }
    else if (inputOutcome.includes('/')) {
        console.log('divide was clicked')
        const splitInput = inputOutcome.split('/');
        const sum = parseFloat(splitInput[0]) / parseFloat(splitInput[1]);
        displayInput.innerHTML = sum;
    }
    else if (inputOutcome.includes('*')) {
        console.log('multiply was clicked')
        const splitInput = inputOutcome.split('*');
        const sum = parseFloat(splitInput[0]) * parseFloat(splitInput[1]);
        displayInput.innerHTML = sum;
    }
    else {
        displayInput.innerHTML = displayInput.innerHTML
    }
})

////// Class selector for color change 



colourChange.forEach(colour=>{
    colour.addEventListener('click', ()=>{
        let setColour = colour.getAttribute('data-colour');
        // root colour name defined in css, this then uses data-colour value and 
        // uses this defined name and changes it with the value set in data-colour
        calculatorContainer.style.setProperty('--changeColour', setColour);
        let submitBtnColour = colour.getAttribute('data-submitBtn-colour');
        sumBtn.style.setProperty('--equalBtn', submitBtnColour);
        let buttonsFontColour = colour.getAttribute('data-font-colour');
        calculatorBtns.style.setProperty('--buttonColour', buttonsFontColour);
        let submitTextColour = colour.getAttribute('data-submitBtn-text');
        sumBtn.style.setProperty('--submitColour', submitTextColour)
        displayInput.style.setProperty('--buttonColour', buttonsFontColour)
    })
})

