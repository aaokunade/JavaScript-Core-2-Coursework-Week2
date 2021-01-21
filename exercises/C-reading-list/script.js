function readingList(books) {
  // Write your code here...
  let content = document.querySelector("#content");
  let newUnOderdList = document.createElement("ul");
  content.appendChild(newUnOderdList);
  books.forEach(function (obj) {
    let newList = document.createElement("li");
    newUnOderdList.appendChild(newList);
    let titlePara = document.createElement("p");
    titlePara.innerText = obj["title"];
    newList.appendChild(titlePara);
    newList.style.width = "15rem";
    let authorPara = document.createElement("p");
    authorPara.innerText = obj["author"];
    newList.appendChild(authorPara);
    let bookImg = document.createElement("img");
    bookImg.src = obj["bookImage"];
    bookImg.style.height = "10rem";
    bookImg.style.width = "10rem";
    newList.appendChild(bookImg);
    if (obj["alreadyRead"]) {
      newList.style.backgroundColor = "green";
    } else {
      newList.style.backgroundColor = "red";
    }
  });
}

const books = [
  {
    title: "The Design of Everyday Things",
    author: "Don Norman",
    alreadyRead: false,
    bookImage: "https://miro.medium.com/max/1200/1*Qo27inBKBKY4Q4Pgk5KkbQ.png",
  },
  {
    title: "The Most Human Human",
    author: "Brian Christian",
    alreadyRead: true,
    bookImage: "https://images-na.ssl-images-amazon.com/images/I/41m1rQjm5tL._SX322_BO1,204,203,200_.jpg",
  },
  {
    title: "The Pragmatic Programmer",
    author: "Andrew Hunt",
    alreadyRead: true,
    bookImage: "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1387736585l/19862709.jpg",
  },
];

readingList(books);
