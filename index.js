/* const header = document.querySelector("h1");
console.log(header.parentElement); */

const DOMSelectors = {
  /*   header: document.querySelector("h2"), */
  cardHeader: document.querySelector(".card-header"),
  description: document.querySelector(".card-desc"),
  /*   items: document.querySelectorAll("li"), //the all allows for every li to be selected, without it, only the first one will selected. */
  button: document.querySelector(".button"),
  form: document.querySelector(".form"),
  container: document.querySelector(".container"),
  name: document.querySelector("#name"),
  hobbies: document.querySelector("#hobbies"),
  age: document.querySelector("#age"),
};

/* DOMSelectors.button.addEventListener("click", function (event) {
  console.log(event.target.parentElement);
  event.target.parentElement.style.backgroundColor = "red";
}); */

DOMSelectors.remove.addEventListener("remove", function (event) {
  event.preventDefault();
});
DOMSelectors.button.addEventListener("click", function (event) {
  event.preventDefault();

  let name = DOMSelectors.name.value;
  let hobbies = DOMSelectors.hobbies.value;
  let age = DOMSelectors.age.value;

  console.log(document.querySelector("input").value);

  DOMSelectors.container.insertAdjacentHTML(
    "beforeend",
    `<div class="container">
        <div class="card">
              <h2 class="card-header">${name}</h2>
              <img src="https://th.bing.com/th/id/R.91a812ea28dbf352fe4ff268a61ae742?rik=AESw7XnMvAGyTA&riu=http%3a%2f%2fgreystoneglobal.com%2fwp-content%2fuploads%2f2015%2f05%2ffailure.jpg&ehk=ZcYNluoILrmLjgw1gTRiahng1%2bqFXc9g%2fqJOcsWDBUs%3d&risl=&pid=ImgRaw&r=0" alt="haha" class="card-img">
              <h3 class="card-desc">Hobbies: ${hobbies}, Age: ${age}</h3>
              <div> <button class="remove" type="remove">remove</button </div>
        </div>
    </div>`
  );
});
//select all list items
/* const item = document.querySelectorAll("li"); */

//turn the node list into an array
/* const items = Array.from(item); */
//iterate/loop over array and for each element make the color red
/* const student = {
  name: "mark",
  age: 16,
};
console.log(DOMSelectors.description); */
/* const buttons = document.querySelectorAll("button");
buttons.forEach((btn) =>
  btn.addEventListener("click", function (event) {
    console.log(event.target.textContent);
  })
); */

/* DOMSelectors.container.insertAdjacentHTML(
  "beforeend",
  <div class="card">
    <h2 class="card-header">${}</h2>
  </div>
);
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

changeColor(); */
