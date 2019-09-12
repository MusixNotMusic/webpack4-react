const process = require('process');
let l = [];     //运算数字
let sop = [];   //运算符

let reg = /(\d{1,}|(\+|\-|\*|\/|\(|\)))/g;
let numberReg    = /^\d+$/;
let operationReg = /^(\+|\-|\*|\/)$/;
let leftRound    = '(';
let rightRound   = ')';

// let str1 = '(12+5)/2*5-(8-10)';
let str1 = '(50/2+44*(33-11))/5-88';
let str = process.argv[2] || str1;
console.log('process.argv[2] ==>', process.argv[2]);
// 优先级
let priority = {
    '+': 1,
    '-': 1,
    '*': 2,
    '/': 2,
};

// 与判断 是否是一个正确的表达式
// 预处理 字符串
function preprocess(exp) {
    exp = exp.trim();
    if (!exp) {
        return; 
    }
    return exp.match(reg);
}
// 中缀 转 后缀
function inflx2Surfix(expList) {
    let i = 0;
    let size = expList.length;
    while(i < size) {
        let item = expList[i];
        if(numberReg.test(item)) {
            l.push(item);
        }else if(operationReg.test(item)) {
            operationCompare(item);
        }else if(item === leftRound) {
            sop.push(item);
        }else if(item === rightRound) {
            matchLeft();
        }
        console.log('inflx2Surfix ==>', l, sop, i);
        i++;
    }
    fall();
}

// sop 栈顶层优先级高于
function operationCompare(src) {
    let top = sop.length - 1;
    while(top >= 0 && operationReg.test(sop[top])){
        if(priorityCompare(src, sop[top])){
            break;
        } else {
            l.push(sop.pop());
            top = sop.length - 1;
        }
    }
    sop.push(src);
}

function matchLeft() {
    let top = sop.length - 1;
    while(top >= 0 && sop[top] !== leftRound) {
        l.push(sop.pop());
        top = sop.length - 1;
    }
    sop.pop();
}

function fall() {
    let top = sop.length - 1;
    while(top >= 0) {
        l.push(sop.pop());
        top = sop.length - 1;
    }
    
}

function priorityCompare(src, dist) {
    return priority[src] > priority[dist];
}

function calculate(result, arr ,start, len) {
    while(start < len) {
        if(operationReg.test(arr[start])) {
            result = doCompute(arr[start], arr[start-2], arr[start-1]);
            arr.splice(start - 2, 3, result);
            return calculate(result, arr, 0, arr.length);
        } 
        start++;
    }
    return result;
}

function doCompute (operator, num1, num2) {
    switch(operator) {
        case '+': return Number(num1) + Number(num2);
        case '-': return Number(num1) - Number(num2);
        case '*': return Number(num1) * Number(num2);
        case '/': return Number(num1) / Number(num2);
        default: throw new Error('unknow operator');
    }
}


// ================= run =================
let expList = preprocess(str);
inflx2Surfix(expList);
let _arr = l.slice();
let result = calculate(0, _arr, 0, _arr.length)
console.log('l ==>', l);
console.log('sop ==>', sop);
console.log('eval', eval(str));
console.log('result', result, _arr);


