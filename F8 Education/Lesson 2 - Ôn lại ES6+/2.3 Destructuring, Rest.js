/**
 * Destructuring: 
 * - Phân rã dùng với object và array
 */

var array = ['Javascript', 'PHP', 'Ruby'];

var [a, b, c] = array; // lấy ra 3 phần tử từ 1 array, ko muốn lấy phần tử nào thì để trống biến đó nhưng vẫn để dấu ,)

console.log(a, b, c);
console.log('----------------------');

//Rest parameters: lấy ra các phần tử còn lại trong mảng mà ko cần khai báo nhiều biến, trả về 1 mảng

//Phân biệt toán tử Rest và Spread: Rest sử dụng kết hợp với destructuring

var [a, ...restpara] = array
console.log(a);
console.log(restpara);
console.log('----------------------');


//Với object
var course = {
    name: 'Javascript',
    price: 1000,
    image: 'image-address',
    children: {
        name: 'ReactJS'
    }
}

var { name, price, image } = course; // lấy key nào thì phải ghi đúng tên key trong object, key ko có trong object sẽ trả ra undefined
console.log(name, price, image);
console.log('----------------------');


//Toán tử rest xài giống với array
//Có thể xài toán tử rest để xóa 1 phần tử trong object hoặc array vì rest chỉ trả về phần tử còn lại

var { name: parentName, children: { name: childrenName } } = course; //Vi object children có key name trùng với key của object course nên nếu lấy ra name ko sẽ bị trùng key và js sẽ ưu tiên key sau cùng

//Giải quyết bằng cách đặt alias cho các key trung nhau như phía trên

console.log(parentName, childrenName)

