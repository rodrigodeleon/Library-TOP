let myLibrary = [];
let main = document.querySelector("#main");
let libraryDisplay = document.querySelector("#displayLibrary");
let btnNewBook = document.querySelector("#btnNewBook");

let bookForm = document.querySelector("#myForm");
let btnAddBook = document.querySelector("#addBook");

function Book(name, author, pagecount) {
  this.name = name;
  this.author = author;
  this.pagecount = pagecount;
  this.read = false;
}

function addBookToLibrary(name, author, pageCount) {
  const myBook = new Book(name, author, pageCount);
  myLibrary.push(myBook);
  printLibrary();
}

function printLibrary() {
    libraryDisplay.innerHTML = "";
  myLibrary.forEach((element, index) => {
    let tableRow = libraryDisplay.insertRow(index);
    let cellIndex = tableRow.insertCell(0);
    let cellName = tableRow.insertCell(1);
    let cellAuthor = tableRow.insertCell(2);
    let cellPageCount = tableRow.insertCell(3);
    cellIndex.innerHTML = index;
    cellName.innerHTML = element.name;
    cellAuthor.innerHTML = element.author;
    cellPageCount.incertCell = element.pageCount;
    console.table(element);
  });
  console.table(myLibrary);
}

function newBook() {
  main.innerHTML = "Test Button";
  bookForm.style.visibility = "visible";
}
btnNewBook.addEventListener("click", () => newBook());
btnAddBook.addEventListener("click", () =>
  addBookToLibrary(
    bookForm.name.value,
    bookForm.author.value,
    bookForm.pageCount.value
  )
);
