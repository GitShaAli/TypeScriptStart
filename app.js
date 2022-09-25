"use strict";
exports.__esModule = true;
var number1 = document.getElementById('n1');
var number2 = document.getElementById('n2');
var btn = document.querySelector('button');
var numResults = [];
var textResults = [];
function add(num1, num2) {
    if (typeof num1 === 'number' && typeof num2 === 'number') {
        return num1 + num2;
    }
    else if (typeof num1 === 'string' && typeof num2 === 'string') {
        return num1 + ' ' + num2;
    }
    return +num1 + +num2;
}
function printResult(resultObj) {
    console.log(resultObj.val);
}
btn === null || btn === void 0 ? void 0 : btn.addEventListener('click', function () {
    var result = add(+number1.value, +number2.value);
    var stringResult = add(number1.value, number2.value);
    numResults.push(result);
    textResults.push(stringResult);
    console.log(numResults, textResults);
    printResult({ val: result, timestamp: new Date() });
});
var myPromise = new Promise(function (resolve, reject) {
    setTimeout(function () {
        resolve('It worked!');
    }, 1000);
});
myPromise.then(function (result) {
    console.log(result.split('w'));
});
