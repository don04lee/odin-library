// framework of the page
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

// addEventListener for submit form
newButton.addEventListener('click', function() {
  popup.classList.toggle('open-popup');
});

// validates form for submit button's addEventListener
submit.addEventListener('click', function(e) {
  if(validate(e)) {
    const newBook = new Book(title.value, author.value, pages.value, read.checked);
    addBookToLibrary(newBook);
    popup.classList.toggle('open-popup');

    // resets form
    document.getElementById('form').reset();
  }
});

// validating form
function validate(e) {
  if(!author.value.match("[a-zA-Z]+")) return false;
  if(!pages.value.match("[0-9]")) return false;

  return true;
}

// constructor of book
function Book(name, author, pages, read) {
  this.name = name;
  this.author = author;
  this.pages = pages;
  this.read = read;
  this.index = myLibrary.length;
}

// creating getters for book
Book.prototype = {
  get getTitle() {
    return this.name;
  },
  get getAuthor() {
    return this.author;
  },
  get getPages() {
    return this.pages;
  },
  get getRead() {
    return this.read;
  },
}

// setter for toggling read
Book.prototype.setRead = function(e) {
  this.read = e;
}

function addBookToLibrary(book) {
  myLibrary.push(book);

  let card = document.createElement('div');
  let title = document.createElement('h2');
  let author = document.createElement('p');
  let pages = document.createElement('p');
  let read = document.createElement('div');
  let removeButton = document.createElement('div');

  shelf.appendChild(card);
  card.appendChild(title);
  card.appendChild(author);
  card.appendChild(pages);
  card.appendChild(read);
  card.appendChild(removeButton);

  title.textContent = book.getTitle;
  author.textContent = book.getAuthor;
  pages.textContent = book.getPages;
  removeButton.textContent = "Remove";

  card.classList.add('card');
  read.classList.add('cardButton');
  read.classList.add('readButton');
  removeButton.classList.add('cardButton');

  if(book.getRead) {
    read.classList.toggle('bookRead');
    read.textContent = "Read";
  }
  else {
    read.textContent = "Not Read";
  }

  // toggles the read status when clicked
  read.addEventListener('click', function() {
    read.classList.toggle('bookRead');
    if(book.getRead) {
      read.textContent = "Not Read";
    }
    else {
      read.textContent = "Read";
    }

    book.setRead(!book.getRead);
  });

  // removes item from division and library
  removeButton.addEventListener('click', function() {
    myLibrary.filter(el => el.getTitle !== title.textContent);
    shelf.removeChild(card);
  });
}
