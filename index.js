/* const header = document.querySelector("h1");
console.log(header.parentElement); */

const DOMSelectors = {
  header: document.querySelector("h1"),
  cardHeader: document.querySelector(".card-header"),
  description: document.querySelector(".card-desc"),
  /*   items: document.querySelectorAll("li"), //the all allows for every li to be selected, without it, only the first one will selected. */
  button: document.querySelector(".btn"),
  form: document.querySelector(".form"),
  container: document.querySelector(".container"),
};

/* DOMSelectors.button.addEventListener("click", function (event) {
  console.log(event.target.parentElement);
  event.target.parentElement.style.backgroundColor = "red";
}); */
DOMSelectors.form.addEventListener("click", function (event) {
  event.preventDefault();
  console.log(document.querySelector("input").value);
});
//select all list items
const item = document.querySelectorAll("li");

//turn the node list into an array
const items = Array.from(item);
//iterate/loop over array and for each element make the color red
/* const student = {
  name: "mark",
  age: 16,
};
console.log(DOMSelectors.description); */

function changeColor() {
  let button = document.querySelector("button");
  //listen for a click event
  button.addEventListener("click", function (event) {
    //prevents default behavior
    event.preventDefault();
    //logging the click event
    console.log(event.target);
    button.style.backgroundColor = "red";
  }); //if an event happens we can run some code
}

changeColor();
