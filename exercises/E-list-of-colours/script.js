function listOfColours(colours) {
  // Write your code here...
  let content = document.querySelector("#content");
  let newSelect = document.createElement("select");
  content.appendChild(newSelect);
  let newPara = document.createElement("p");
  newPara.innerText = "You have Selected: ";
  content.appendChild(newPara);
  newSelect.onchange = function () {
    // alert(newSelect.value);
    newPara.innerText = `You have Selected ${newSelect.value}`;
    newPara.style.backgroundColor = newSelect.value;
  };
  colours.forEach(function (str) {
    let newOption = document.createElement("option");
    newOption.innerText = str;
    newSelect.appendChild(newOption);

    // function optionEvent() {
    //   alert(str);
    // newPara.innerText = str;
    // }
  });
}

const colours = ["red", "blue", "green", "yellow", "pink", "brown"];

listOfColours(colours);
