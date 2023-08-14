let shelf = document.getElementById('shelf');
let newButton = document.getElementById('button');
let popup = document.getElementById('popup');

let myLibrary = [];

newButton.addEventListener('click', function() {
  popup.classList.toggle('open-popup');
});

function Book(name, author, pages) {
  this.name = name;
  this.author = author;
  this.pages = pages;
}

function addBookToLibrary(book) {

}