/**
 * 
 * JSX (Javscript XML): 
 *  - Đặc trưng của XML là cú pháp thẻ mở và thẻ đóng và HTML là mở rộng của XML
 *  - JSX để tạo cú pháp React.createElement đơn giản hơn, React.createElement là đối số bắt buộc trong hàm render.
 *  - JSX ko thể truyển thẳng vào đối số của hàm render vì render chỉ nhận reactElement -> dùng thư viện Babel(bước trung gian) để phân tích cú pháp
 *    chuyển đổi cú pháp JSX -> Javascript (code React ở những bài trước) -> sau này chỉ cần code dạng HTML hoặc XML sẽ tự động chuyển đổi thành reactElemetn
 * 
 */

/**
 * Thư viên Babel
 */



const reactCourse = 'ReactJS F8';

const ul = <ul>
    <li>Javascript</li>
    <li>ReactJS</li>
</ul>

//Render UI bằng React DOM

//Get root element
const root = document.getElementById('root')

//React-DOM -> render UI
ReactDOM.render(ul, root) // Render nhiều react element bằng cách để trong 1 array

/**
 * Khi dùng thư viện Babel khi load trình duyệt dùng F12 thì code tự thêm 1 thẻ script trong đó chứa code sau khi đã chuyển đổi bằng babel
 */


// var array = ['<li>Title 1</li>', '<li>Title 2</li>', '<li>Title 3</li>'];

// // const ul = array.reduce(function (accumulator, currentValue) {
// //     return accumulator + currentValue
// // })

// const ul = <ul>
//     {array.map(function (array) {
//         return <li>{array}</li>;
//     })}
// </ul>

// //Get root element
// const root = document.getElementById('root')

// //React-DOM -> render UI
// ReactDOM.render(ul, root) // Render nhiều react element bằng cách để trong 1 array