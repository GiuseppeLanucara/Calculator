const display = document.getElementById('display');
const buttons = document.getElementsByClassName('btn');

const zero = document.getElementById('0');
const one = document.getElementById('1');
const two = document.getElementById('2');
const three = document.getElementById('3');
const four = document.getElementById('4');
const five = document.getElementById('5');
const six = document.getElementById('6');
const seven = document.getElementById('7');
const eight = document.getAnimations('8');
const nine = document.getElementById('9');
const minusBtn = document.getElementById('minus');
const deleteBtn = document.getElementById('delete');
const equalsBtn = document.getElementById('equals');
const plusBtn = document.getElementById('plus');
const divideBtn = document.getElementById('divide');
const multiplyBtn = document.getElementById('multiply');

let calc1 = null;
let calc2 = null;
let operator = null;
let total = null;
display.value = calc1;



plusBtn.addEventListener('click', function () {

    if (calc1 != null) {

        calc2 = parseInt(display.value)

        operation()

        operator = 'plus';

        display.value = '';


    } else {
        calc1 = parseInt(display.value);
        display.value = '';
        operator = 'plus';
    }




    // if (calc1 != null) {
    //     display.value = cal
    // } else {
    //     display.value = null;
    // }
});

divideBtn.addEventListener('click', function (e) {
    addValue(e.target.value, calc1)
});
multiplyBtn.addEventListener('click', function (e) {
    console.log(e.target.value);
});
minusBtn.addEventListener('click', function (e) {
    if (calc1 != null) {

        calc2 = parseInt(display.value)

        operation()

        operator = 'minus';

        display.value = '';


    } else {
        calc1 = parseInt(display.value);
        display.value = '';
        operator = 'minus';
    }
});
deleteBtn.addEventListener('click', function (e) {
    console.log(e.target.value);
});

equalsBtn.addEventListener('click', function () {
    calc2 = parseInt(display.value);

    operation()

})


function operation() {

    switch (operator) {
        case 'plus':
            total = calc1 + calc2
            break;

        case 'minus':
            total = calc1 - calc2
            break;




    }

    display.value = total
    calc1 = total
    calc2 = null
}

