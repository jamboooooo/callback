function some(num, callback) {
    callback(num);
}

some(10, (item) => {
    console.log(item)
})

function some2(num1, num2, callback) {
    return callback(num1, num2);
}

console.log(some2(10, 20, (item1, item2) => {
    return item1 + item2;
}));

function myFilter(arr, callback) {
    let result = [];
    for (let i = 0; i < arr.length; i++) {
        if (callback(arr[i])) {
            result.push(arr[i]);
        }
    }
    return result;
}

let array = [13, 22, 34, 47, 56];

console.log(myFilter(array, (item) => {
    return item % 2 === 0;
}))

function myMap(arr, callback) {
    let result = [];
    for (let i = 0; i < arr.length; i++) {
        result.push(callback(arr[i]))
    }
    return result;
}

console.log(myMap(array, (item) => {
    return item * 2;
}))

function myFind(arr, findNum, callback) {
    for (let i = 0; i < arr.length; i++) {
        if (findNum === arr[i]) {
            return callback(arr[i]);
        }
    }
}

myFind(array, 34, (item) => {
    return item
})

function myReduce(arr, startNum, callback) {
    for (let i = 0; i < arr.length; i++) {
        startNum += arr[i];
    }
    return callback(startNum)
}

myReduce(array, 0, (item) => {
    return item;
})