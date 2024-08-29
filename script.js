const submit = document.querySelector('.submit');

const myLibrary = [];

function Book(title, author, numOfPages, read) {
    this.title = title;
    this.author = author;
    this.numOfPages = numOfPages;
    this.read = read;
    
    this.getReadStatus = function () {
        let readStatus = "";
        if (this.read === true) {
            readStatus = "Read";
        } else {
            readStatus = "Unread";
        }
        return readStatus;
    }
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

function createTableDataEls(bookObjectArr) {
    const table = document.querySelector('.book-table');
    const tr = document.createElement('tr');

    let tableElCount = table.childElementCount - 2;

    tr.className = `row${tableElCount}`;

    let td;
    
    for (i = 0; i <= 4; i++) {
        td = document.createElement('td');
        if (i === 0) {
            td.className = `title${tableElCount}`;
            td.innerHTML = bookObjectArr[tableElCount].title;
        } else if (i === 1) {
            td.className = `author${tableElCount}`;
            td.innerHTML = bookObjectArr[tableElCount].author;
        } else if (i === 2) {
            td.className = `numpages${tableElCount}`;
            td.innerHTML = bookObjectArr[tableElCount].numOfPages;
        } else if (i === 3) {


            td.classList.add(`readstatus${tableElCount}`, "read-status");
            td.innerHTML = bookObjectArr[tableElCount].getReadStatus();

            
            
        } else {
            
            td.classList.add(`update${tableElCount}`, "update-td");
            // td.innerHTML = "Test";
            
            let toggleButton = document.createElement('button');
            let deleteButton = document.createElement('button');

            deleteButton.classList.add(`deletebutton${tableElCount}`, 'delete-btn');
            deleteButton.innerHTML = "Delete";
            
            toggleButton.classList.add(`togglebutton${tableElCount}`, "toggle-btn");
            
            td.appendChild(toggleButton);
            td.appendChild(deleteButton);
            
            toggleButton.addEventListener("click", () => {
                const readStatusTemp = document.querySelector(`.readstatus${tableElCount}`);
                if(bookObjectArr[tableElCount].getReadStatus() === "Read") {
                    bookObjectArr[tableElCount].read = false;
                    readStatusTemp.innerHTML = bookObjectArr[tableElCount].getReadStatus();
                    toggleButton.innerHTML = "Mark Read";
                    td.appendChild(toggleButton);
                    td.appendChild(deleteButton);
                } else {
                    bookObjectArr[tableElCount].read = true;
                    readStatusTemp.innerHTML = bookObjectArr[tableElCount].getReadStatus();
                    toggleButton.innerHTML = "Mark Unread";
                    td.appendChild(toggleButton);
                    td.appendChild(deleteButton);
                            }
                        })


            if(bookObjectArr[tableElCount].getReadStatus() === "Read") {
                    toggleButton.innerHTML = "Mark Unread";
                } else {
                    toggleButton.innerHTML = "Mark Read";
                }
        }
        tr.appendChild(td);
    }
    
    
  
    table.appendChild(tr);
}

function clearForm() {
    document.querySelector("#title-input").value = '';
    document.querySelector('#author-input').value = '';
    document.querySelector('#pages-input').value = '';
    document.querySelector('#read-yes').checked = false;
    document.querySelector('#read-no').checked = false;
}

submit.addEventListener('click', () => {
    addBook();
    clearForm();
    createTableDataEls(myLibrary);
});

