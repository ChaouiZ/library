const myLibrary = [];

function Book(title, author, numOfPages, read) {
  this.title = title;
  this.author = author;
  this.numOfPages = numOfPages;
  this.read = read;

  this.info = function () {
    let readStatus = "";
    if (this.read === true) {
      readStatus = "Read";
    } else {
      readStatus = "Unread";
    }

    console.log(`${title}, ${author}, ${numOfPages} pages, ${readStatus}`);
  };
}

let lOtr = new Book("Lord of the Rings", "J.R.R Tolkien", 290, true);
