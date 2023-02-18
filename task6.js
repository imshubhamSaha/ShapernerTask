//Task6//
//QUERYSELECTOR///

//Question 1////
secondItem.style.backgroundColor = "green";
//Question 2////
thirdItem.setAttribute("hidden", "hidden");
// thirdItem.style.display = "none";




/////QUERY SELECTORALL////

///Question 1///
const li = document.querySelectorAll("li");
li[1].style.color = "green";
li[1].style.fontWeight = "bold";
///////Question 2/////
const odd = document.querySelectorAll("li:nth-child(odd)");
for (let i = 0; i < odd.length; i++) {
  odd[i].style.backgroundColor = "green";
}
