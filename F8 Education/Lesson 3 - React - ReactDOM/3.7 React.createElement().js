/**
 * 
 * React.createElement(): trả về đối tượng React element, DOM trả về DOM element
 * 
 */

//DOM
const h1DOM = document.createElement('h1');

h1DOM.title = 'Hello';
h1DOM.className = 'heading';
h1DOM.innerText = 'Hello guys'; // với DOM là chuỗi nhưng với React thì nó sẽ hiểu là bất kỳ kiểu dữ liệu nào nên ko thể dùng innerText cho React, 
//React sẽ hiểu nội dung nắm giữa là 1 children (ở đây là đối số thứ 3).

document.body.appendChild(h1DOM)

//React
//Cú pháp chung: React.createElement(type, props, children, n) (tên thẻ, các attribute (dạng object), content, content thứ n) *******
//Mặt dù children là đối số thứ 3 nhưng khi show trên console log sẽ tự hiểu là 1 props, sẽ sinh ra 1 attribute children giống title và className. 
//Đối số thứ 3 children sẽ thể hiện trong props
const h1React = React.createElement('h1', {
    title: 'Hello React',
    className: 'heading React'
}, 'Hello guys React')


//Example 2 : Thêm element con vào element cha

//DOM
const ulDOM = document.createElement('ul');

const liDOM1 = document.createElement('li');
liDOM1.innerText = 'Javascript';

const liDOM2 = document.createElement('li');
liDOM2.innerText = 'ReactJS';

ulDOM.appendChild(liDOM1);
ulDOM.appendChild(liDOM2);

document.body.appendChild(ulDOM);


//React
const ulReact = React.createElement('ul', null, // ko có attribute nên để null đối số thứ 2
    React.createElement('li', null, 'Javascript React'),
    React.createElement('li', null, 'Javascript React')
);

//Example 3

//DOM
const divDOM = document.createElement('div');
divDOM.className = 'post-item';

const h2DOM = document.createElement('h2');
h2DOM.title = 'Học React tại F8';
h2DOM.innerText = 'Học React JS';

const pDOM = document.createElement('p')
pDOM.innerText = 'Học ReactJS từ cơ bản tới nâng cao'

divDOM.appendChild(h2DOM);
divDOM.appendChild(pDOM);

document.body.appendChild(divDOM);

//React

const divReact = React.createElement(
    'div',
    {
        className: 'post-item'
    },
    React.createElement(
        'h2',
        {
            title: 'Học React tại F8'
        },
        'Học React JS'),
    React.createElement(
        'p'
        , null,
        'Học ReactJS từ cơ bản tới nâng cao')
);

console.dir(divReact)
