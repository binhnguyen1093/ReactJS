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

//Trường hợp thứ 2 sử dụng với Rest
// nếu phía trước ko truyền vào biến nào thì js tự hiểu phần còn lại là tất cả, nhứng nếu truyền vào thêm para thì tùy vào giá trị truyền vào rest sẽ là phần còn lại
function logger(...params) {
    console.log(params);
}

logger(1, 2, 3, 4) // reusult ra mảng 1,2,3,4

function logger2(a, b, ...params) {
    console.log(params);
}

logger2(1, 2, 3, 4) // reusult ra mảng 3,4

//Với Object thì truyền thẳng key vào object chúng ta sẽ lấy luôn dc value

function logger3({ name, ...rest }) {
    console.log(name, price); // ra value name Javascript
    console.log(rest) // ra mảng value 1000 và description
}

logger3({
    name: 'Javascript',
    price: 1000,
    desciption: 'description'
})