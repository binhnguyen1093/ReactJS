
/**
 * document.createElement
 * 
 */

const h1 = document.createElement('h1'); //Element chỉ mới dc ghi vào bộ nhớ và chưa xuất hiện trên giao diện
const root = document.getElementById('root') //Inspect Element vẫn thấy thẻ h1 nằm trong root , nhưng nếu View page source ra chỉ thấy div id root trống

/**
 * Trong ES6 có từ khóa class nên nếu dùng element.class sẽ bị trùng nên chúng ta dùng className thay thế để lấy tên của Class
 * className là property có sẵn trong react JS.
 */

h1.innerText = 'Hello guys!'
h1.id = 'heading'
h1.className = 'test class-2' // đặt nhiều tên class thì dung space cách ra
Object.assign(h1.style, {
    color: 'blue',
})// cách thay thế objec

root.appendChild(h1); //Thêm thằng con vào thẻ 