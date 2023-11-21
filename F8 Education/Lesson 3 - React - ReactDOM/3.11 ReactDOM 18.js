/**
 * 
 * React-DOM: dùng để render ra React Element
 *  - Là thư viện làm cầu nối giữa React và DOM
 *  - Giúp React tạo ra được react element và dùng element đó render vào DOM
 *  - React-Native: build IOS, Android
 * 
 */

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

const ulReact = React.createElement(
    'ul',
    null,
    React.createElement(
        'li',
        null,
        'Javascript'
    ),
    React.createElement(
        'li',
        null,
        'ReactJS'
    )
)

//Render UI bằng React DOM 17

//Get root element
//const root = document.getElementById('root')

//React-DOM  -> render UI
//ReactDOM.render([divReact, ulReact], root) // Render nhiều react element bằng cách để trong 1 array

//ReactDOM.render(ulReact, root)


//Render UI bằng React DOM 18

//Get root element
const root18 = ReactDOM.createRoot(document.getElementById('root')) // trả về 1 object root

//React-DOM  -> render UI
root18.render(ulReact) // Render nhiều react element bằng cách để trong 1 array