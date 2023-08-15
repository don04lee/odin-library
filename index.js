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
  card.classList.add('card');
  shelf.appendChild(card);

  let title = document.createElement('p');
  title.textContent = book.getTitle;
  card.appendChild(title);

  let author = document.createElement('p');
  author.textContent = book.getAuthor;
  card.appendChild(author);

  let pages = document.createElement('p');
  pages.textContent = book.getPages;
  card.appendChild(pages);

  let read = document.createElement('div');
  if(book.getRead) {
    read.classList.toggle('bookRead');
    read.textContent = "Read";
  }
  else {
    read.textContent = "Not Read";
  }
  read.classList.add('cardButton');
  read.classList.add('readButton');
  card.appendChild(read);

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

  let removeButton = document.createElement('div');
  removeButton.textContent = "Remove";
  removeButton.classList.add('cardButton');
  card.appendChild(removeButton);

  // removes item from division and library
  removeButton.addEventListener('click', function() {
    myLibrary.filter(el => el.getTitle !== title.textContent);
    shelf.removeChild(card);
  });
}
