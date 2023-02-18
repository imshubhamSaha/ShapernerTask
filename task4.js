//GET ELEMENT BY CLASSNAME//
const items = document.getElementsByClassName("list-group-item");
// console.log(items);
// console.log(items[1]);
// items[1].textContent = "Hello 2";
// items[1].style.fontWeight = "bold ";
// items[1].style.backgroundColor = "yellow ";

// for (let i = 0; i < items.length; i++) {
//   items[i].style.backgroundColor = "#f4f4f4 ";
// }
// Write the code as per the youtuber does
// Make the 3 rd element in the list have green background color
// Make all the elements in the list have bold color font

//////question 1////
items[2].style.backgroundColor = "green ";

//////////Question 2///////

for (let i = 0; i < items.length; i++) {
  items[i].style.color = "red ";
  items[i].style.fontWeight = "bold ";
}
