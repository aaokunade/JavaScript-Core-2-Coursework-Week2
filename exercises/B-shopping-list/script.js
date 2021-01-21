function shoppingList(arrayOfItems) {
  // Write your code here...
  let content = document.querySelector("#content");
  let newUnOderdList = document.createElement("ul");
  content.appendChild(newUnOderdList);
  arrayOfItems.forEach(function (str) {
  let newList = document.createElement("li");
    newList.innerText = str;
    newUnOderdList.appendChild(newList);
  });
}

let shopping = ["Milk", "Bread", "Eggs", "A Dinosaur", "Cake", "Sugar", "Tea"];

shoppingList(shopping);
