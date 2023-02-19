///Task 7////
///Traversing the Dom///
// const itemList = document.querySelector("#items");
//parentNode
// console.log(itemList.parentNode);
// itemList.parentNode.style.backgroundColor = '#f4f4f4';
// console.log(itemList.parentNode.parentNode.parentNode);

//parentElement
// console.log(itemList.parentElement);
// itemList.parentElement.style.backgroundColor = '#f4f4f4';
// console.log(itemList.parentElement.parentElement.parentElement);

//ChildNodes =
// console.log(itemList.childNodes);

// console.log(itemList.children);
// console.log(itemList.children[1]);
// itemList.children[1].style.backgroundColor = 'yellow';

// //FirstChild
// console.log(itemList.firstChild);

// //firstElementChild
// console.log(itemList.firstElementChild);
// itemList.firstElementChild.textContent = 'Hello 1'

//LastChild
// console.log(itemList.lastChild);

//lastElementChild
// console.log(itemList.lastElementChild);
// itemList.lastElementChild.textContent = 'Hello 4'

//nextSibling
// console.log(itemList.nextSibling);

//nextElementSibling
// console.log(itemList.nextElementSibling);

//previousSibling
// console.log(itemList.previousSibling);

//previousElementSibling
// console.log(itemList.previousElementSibling);
// itemList.previousElementSibling.style.color = 'green'

////CreateElement///
//create a div//
// const newDiv = document.createElement("div");

// //Add class
// newDiv.className = "hello";
// //Add id
// newDiv.id = "hello1";
// //Add attr
// newDiv.setAttribute("title", "Hello div");

// //create text node
// const newDivText = document.createTextNode("Hello World");

// //Add text to div
// newDiv.appendChild(newDivText);

// const containerHeader = document.querySelector("header .container");
// const h1 = document.querySelector("header h1");

// // console.log(newDiv);
// newDiv.style.fontSize = "30px";
// containerHeader.insertBefore(newDiv, h1);

//Question1////
const newDiv = document.createElement("div");
newDiv.className = "hello";
newDiv.id = "hello1";
newDiv.setAttribute("title", "Hello div");
const newDivText = document.createTextNode("Hello World");
newDiv.appendChild(newDivText);
const container = document.querySelector("header .container");
const h1 = document.querySelector("header h1");
newDiv.style.fontSize = "30px";
container.insertBefore(newDiv, h1);

//Question 2///
const newDivEl = document.createElement("div");

const divText = document.createTextNode("Hello World");
newDivEl.appendChild(divText);

const ul = document.querySelector(".list-group");
const card = document.querySelector(".card-body");
card.insertBefore(newDivEl, ul);
