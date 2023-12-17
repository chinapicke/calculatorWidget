const numberGrid = document.querySelector('.numberGrid');
const displayInput = document.querySelector('.inputDisplay')

// create buttons for all of the number for 1 to 9
// add click functions to all the buttons that return the value that has been clicked
for (let i = 1; i <= 9; i++) {
    const buttons = document.createElement('button');
    buttons.value = i;
    buttons.innerHTML = `${i}`;
    buttons.addEventListener('click', function (e) {
        displayInput.innerText += e.target.value
    });
    numberGrid.append(buttons);
}

const rightSideColumn = document.querySelector('.symbols');
const rightSideColumnChildren = rightSideColumn.childNodes;

// create a count of 0 so that this limits the symbols to be pressed more than once in each instance
let symbolCount = 0;

for (let i = 0; i <= rightSideColumnChildren.length - 1; i++) {
    if (i % 2 !== 0) {
        rightSideColumnChildren[i].addEventListener('click', function (e) {
            if (symbolCount >= 1) {
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
const zeroBtn = document.getElementById('zero')
zeroBtn.addEventListener('click', function (e) {
    displayInput.innerHTML += e.target.value;
})

let dotCount = 0;

const dotBtn = document.getElementById('dot')
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
const deleteBtn = document.getElementById('del')
deleteBtn.addEventListener('click', function () {
    // slice function to remove last element, -1 achieves this// slice arguments take in where the index 
    // starts and end
    displayInput.innerHTML = displayInput.innerHTML.slice(0, -1)
})

// clear button
const clearBtn = document.getElementById('clear')
// replaces displayInput with empty string
clearBtn.addEventListener('click', function () {
    displayInput.innerText = '';
})

// percentage button 
const percentageBtn = document.getElementById('percent')
percentageBtn.addEventListener('click', function(e){
    // converts the displauInput.innerHTML to a decimal of itself
    const percentageValue = parseFloat(displayInput.innerHTML)
    displayInput.innerHTML = percentageValue / 100
})


const sumBtn = document.getElementById('sum')
sumBtn.addEventListener('click', function () {
    // onClick increase symbolCount and then return/disable click for other symbol buttons
    let inputOutcome = displayInput.innerHTML;
    symbolCount = 0;
    dotCount = 0;
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
