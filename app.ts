export {}
var number1 = document.getElementById('n1') as HTMLInputElement;
var number2 = document.getElementById('n2') as HTMLInputElement;
var btn = document.querySelector('button');

const numResults:Array<number> = [];
const textResults:string[]= [];


type NumOrString = number | string;
type Result= { val: number; timestamp: Date };

interface ResultObj {
    val: number;
    timestamp: Date;
}

function add(num1: NumOrString, num2: NumOrString) {
    if(typeof num1 === 'number' && typeof num2 === 'number'){
    return num1 + num2;
    }else if (typeof num1 === 'string' && typeof num2 === 'string') {
    return num1 + ' '+num2;
    }
    return +num1 + +num2;
}
function printResult(resultObj: ResultObj) {
    console.log(resultObj.val);
}

btn?.addEventListener('click',()=>{
    var result= add(+number1.value, +number2.value);
    var stringResult = add(number1.value, number2.value);
    numResults.push(result as number);
    textResults.push(stringResult as string);
    console.log(numResults, textResults);
    printResult({ val: result as number, timestamp: new Date() });
})

const myPromise = new Promise<string>((resolve,reject)=>{
    setTimeout(() => {
        resolve('It worked!');
        }, 1000);
});

myPromise.then((result)=>{
    console.log(result.split('w'))
})