/**
 * Toán tử Spread: (...): đặt toán tử trc array hoặc object thì sẽ bỏ đi dấu {} hoặc [] của array hoặc object
 * 
 */

var array1 = ['Javascript', 'Ruby', 'PHP'];

var array2 = ['ReactJS', 'Dart'];

var array3 = [...array2, ...array2]; //Nối 2 mảng ko xài concat

var object1 = {
    name: 'Javascript',
    price: 1000,
    description: 'Java'
}

var object2 = {
    name2: 'PHP',
    price2: 2000,
    description2: 'PHP'
}

var object3 = { ...object1, ...object2 }

console.log(array3)
console.log('----------------------');

console.log(object3)
console.log('----------------------');

console.log(...array1)
console.log('----------------------');

/**
 * Rest dùng khi định nghĩa ra tham số trong hàm.
 * Spread dùng khi truyền đối số vào hàm.
 */

function logger(...rest) {
    var arrayFinal = [...rest, ...array2];
    console.log(arrayFinal)
}

logger(...array1)