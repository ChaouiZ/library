const submit = document.querySelector('.submit');

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

function addBook() {
    const titleInput = document.querySelector("#title-input").value;
    const authorInput = document.querySelector('#author-input').value;
    const pagesInput = document.querySelector('#pages-input').value;
    
    let readCheck; 
    const readYes = document.querySelector('#read-yes');
    const readNo = document.querySelector('#read-no');
    
    if (readYes.checked) {
        readCheck = true;
    } else if (readNo.checked) {
        readCheck = false;
    }
    
    const book = new Book(titleInput, authorInput, pagesInput, readCheck);

    myLibrary.push(book);
    console.log(myLibrary);
}

function clearForm() {
    document.querySelector("#title-input").value = '';
    document.querySelector('#author-input').value = '';
    document.querySelector('#pages-input').value = null;
    document.querySelector('#read-yes').checked = false;
    document.querySelector('#read-no').checked = false;

    
}

submit.addEventListener('click', () => {
    addBook();
    clearForm();
});

