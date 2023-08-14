let shelf = document.getElementById('shelf');
let newButton = document.getElementById('button');
let popup = document.getElementById('popup');

// taking into account new book inputs
let title = document.getElementById('name');
let author = document.getElementById('author');
let pages = document.getElementById('pages');
let read = document.getElementById('read');
let submit = document.getElementById('submit');

let myLibrary = [];

let libraryDiv = document.createElement('div');


newButton.addEventListener('click', function() {
  popup.classList.toggle('open-popup');
});

submit.addEventListener('click', function(e) {
  if(validate(e)) {
    const newBook = new Book(title.value, author.value, pages.value, read.checked);
    addBookToLibrary(newBook);
    popup.classList.toggle('open-popup');
  }
});

function validate(e) {
  if(!author.value.match("[a-zA-Z]+")) return false;
  if(!pages.value.match("[0-9]")) return false;

  return true;
}

function Book(name, author, pages, read) {
  this.name = name;
  this.author = author;
  this.pages = pages;
  this.read = read;
}

function addBookToLibrary(book) {
  myLibrary.push(book);
  console.log(myLibrary);
}