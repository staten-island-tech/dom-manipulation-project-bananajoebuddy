const DOMSelectors = {
  header: document.querySelector("h1"),
  description: document.querySelector(".card-desc"),
  items: document.querySelectorAll("li"), //the all allows for every li to be selected, without it, only the first one will selected.
};

const student = {
  name: "mark",
  age: 16,
};
console.log(DOMSelectors.description);

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
