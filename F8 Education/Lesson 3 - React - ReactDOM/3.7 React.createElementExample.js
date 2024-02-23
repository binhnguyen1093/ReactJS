//Thẻ HTML

//VD1:
// <h1 title = "Hello" class="heading">Hello guys!</h1>

/** VD2
 * <ul>
        <li>Javascript</li>
        <li>React JS</li>
    </ul>
 */

/**
 * <div class="post-item">
        <h2 title="Học React tại F8">Học ReactJS</h2>
        <p>Học ReactJS từ cơ bản tới nâng cao</p>
    </div>
 */



//VD1
//DOM
var h1Tag = document.createElement("h1");
h1Tag.title = "Hello";
h1Tag.className = "heading"
h1Tag.innerText = "Hello guys!"

document.body.appendChild(h1Tag);

//React
const h1React = React.createElement('h1', {
    title: 'Hello React',
    className: 'headingReact'
}, 'Hello guys!')

//VD2
//DOM
var ulTag = document.createElement('ul');
var liTag = document.createElement('li');
var liTag2 = document.createElement('li');
liTag.innerText = 'Javascript';
liTag2.innerText = 'ReactJS';
ulTag.appendChild(liTag);
ulTag.appendChild(liTag2);
document.body.appendChild(ulTag);

//React
const ulReact = React.createElement('ul', {

}, React.createElement('li', null, 'Javascript'), React.createElement('li', {

}, 'ReactJS'))

const root = document.getElementById('root');


console.log('-------VD2-------');
console.log(ulReact);

//VD3
//React
const divReact = React.createElement('div', {
    className: 'post-item',
}, React.createElement('h2', {
    title: 'Học React tại F8',
}, 'Học ReactJS'), React.createElement('p', null, 'Học ReactJS từ cơ bản tới nâng cao'));

ReactDOM.render(divReact, root);
console.log('-------VD3-------');
console.log(divReact);