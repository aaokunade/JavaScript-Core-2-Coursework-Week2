function listOfNames(arrayOfPeople) {
  let content = document.querySelector("#content");
//   for (let i = 0; i < arrayOfPeople.length; i++) {
//     let headerOne = document.createElement("h1");
//     headerOne.innerText = arrayOfPeople[i]["name"];
//     content.appendChild(headerOne);
//     let headerTwo = document.createElement("h2");
//     headerTwo.innerText = `${arrayOfPeople[i]["name"]}'s job is ${arrayOfPeople[i]["job"]}`;
//     content.appendChild(headerTwo);
//   }
      arrayOfPeople.forEach(function(obj){
        let headerOne = document.createElement("h1");
        headerOne.innerText = obj["name"];
        content.appendChild(headerOne);
        let headerTwo = document.createElement("h2");
        headerTwo.innerText = `${obj["name"]} is a ${obj["job"]}`;
        content.appendChild(headerTwo);
      })
}


let people = [
  { name: "Chris", job: "Teacher" },
  { name: "Joanna", job: "Student" },
  { name: "Boris", job: "Prime Minister" },
];

listOfNames(people);
