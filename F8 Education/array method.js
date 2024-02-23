/**
 * Map(): duyệt qua từng phần tử trong 1 mảng và trả về 1 mảng mới hoặc value của object tùy thuộc giá trị muốn trả về
 * 
 * Reduce(): duyệt qua từng phần tử trong 1 mảng, trả về giá trị và kiểu dữ liệu mong muốn, truyền vào 2 giá trị là 
 *  - accumulator: giá trị return mà mổi lần duyệt qua callback trả về
 *  - currentvalue: giá trị của phần tử ở vị trí index hiện tại đang duyệt đến
 *  - initialvalue: giá trị khởi tạo, nếu ko có giá trị khởi tạo lấy giá trị index đầu tiên
 */

//Map()

var array = ['<h1>Title 1</h1>', '<h1>Title 2</h1>', '<h1>Title 3</h1>'];
console.log(array)
var newarray = array.map(function (array) {
    return array;
})

console.log(newarray)

var newarray2 = array.reduce(function (accumulator, currentValue) {
    return accumulator + currentValue
})

console.log(newarray2);

const numbers = [1, 2, 3, 4, 5];

const sum = numbers.reduce(function (accumulator, currentValue) {
    console.log('accu ' + accumulator);
    console.log('current ' + currentValue);
    return accumulator + currentValue;
});