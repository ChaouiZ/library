const submit = document.querySelector('.submit');
const tbody = document.querySelector('tbody');
console.log(tbody.childNodes);
console.log(Array.from(tbody.children));
const myLibrary = [];
const tableRows = [];

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

function updateTrAndTdNumbers() {
    
}

function clearTable() {
    const tbody = document.querySelector('tbody');
    const childNodes = Array.from(tbody.children);

  while (childNodes.length > 1) {
    tbody.removeChild(childNodes[1]);
    childNodes.splice(1, childNodes.length - 1);
}
//     const table = document.querySelector('.book-table');
//   const tbody = table.querySelector('tbody');

//   while (tbody.lastChild) {
//     tbody.removeChild(tbody.firstChild);
//   }
}

// function createTableDataEls(bookObjectArr) {
//     const table = document.querySelector('.book-table');
//     const tr = document.createElement('tr');

//     let tableElCount = table.childElementCount - 2;

//     tr.className = `row${tableElCount}`;

//     let td;
    
//     for (i = 0; i <= 4; i++) {
//         td = document.createElement('td');
//         if (i === 0) {
//             td.className = `title${tableElCount}`;
//             td.innerHTML = bookObjectArr[tableElCount].title;
//         } else if (i === 1) {
//             td.className = `author${tableElCount}`;
//             td.innerHTML = bookObjectArr[tableElCount].author;
//         } else if (i === 2) {
//             td.className = `numpages${tableElCount}`;
//             td.innerHTML = bookObjectArr[tableElCount].numOfPages;
//         } else if (i === 3) {


//             td.classList.add(`readstatus${tableElCount}`, "read-status");
//             td.innerHTML = bookObjectArr[tableElCount].getReadStatus();

            
            
//         } else {
            
//             td.classList.add(`update${tableElCount}`, "update-td");
//             // td.innerHTML = "Test";
            
//             let toggleButton = document.createElement('button');
//             let deleteButton = document.createElement('button');

//             deleteButton.classList.add(`deletebutton${tableElCount}`, 'delete-btn');
//             toggleButton.classList.add(`togglebutton${tableElCount}`, "toggle-btn");
//             deleteButton.innerHTML = "Delete";
            
            
//             td.appendChild(toggleButton);
//             td.appendChild(deleteButton);

//             toggleButton.addEventListener("click", () => {
//                 const readStatusTemp = document.querySelector(`.readstatus${tableElCount}`);
//                 if(bookObjectArr[tableElCount].getReadStatus() === "Read") {
//                     bookObjectArr[tableElCount].read = false;
//                     readStatusTemp.innerHTML = bookObjectArr[tableElCount].getReadStatus();
//                     toggleButton.innerHTML = "Mark Read";
//                     td.appendChild(toggleButton);
//                     td.appendChild(deleteButton);
//                 } else {
//                     bookObjectArr[tableElCount].read = true;
//                     readStatusTemp.innerHTML = bookObjectArr[tableElCount].getReadStatus();
//                     toggleButton.innerHTML = "Mark Unread";
//                     td.appendChild(toggleButton);
//                     td.appendChild(deleteButton);
//                             }
//                         })

//                         deleteButton.addEventListener("click", () => {
//                             if(confirm(`Are you sure that you would like to delete "${bookObjectArr[tableElCount].title}"?`)) {
//                                 tr.remove();
//                                 myLibrary.splice(tableElCount, 1);
//                                 console.log(myLibrary);
//                             }
//                             console.log("No");
//                         })


//             if(bookObjectArr[tableElCount].getReadStatus() === "Read") {
//                     toggleButton.innerHTML = "Mark Unread";
//                 } else {
//                     toggleButton.innerHTML = "Mark Read";
//                 }
//         }
//         tr.appendChild(td);
//     }
    
    
  
//     table.appendChild(tr);
// }

function displayRows() {

    for(i = 0; i <= tableRows.length - 1; i++) {
        
    }

    row.appendChild(titleTd);
    row.appendChild(authorTd);
    row.appendChild(pageNumsTd);
    row.appendChild(readStatusTd);
    row.appendChild(updateTd);

    table.appendChild(row);
}


function assignUpdateButtonEventListeners(toggleBtn, deletBtn, tr, index, bookObjectArr) {

    toggleBtn.addEventListener("click", () => {
        const readStatusTemp = document.querySelector(`.readstatus${index}`);
                if(bookObjectArr[index].getReadStatus() === "Read") {
                    bookObjectArr[index].read = false;
                    readStatusTemp.innerHTML = bookObjectArr[index].getReadStatus();
                    toggleBtn.innerHTML = "Mark Read";
                    updateTd.appendChild(toggleBtn);
                    updateTd.appendChild(deletBtn);
                } else {
                    bookObjectArr[index].read = true;
                    readStatusTemp.innerHTML = bookObjectArr[index].getReadStatus();
                    toggleBtn.innerHTML = "Mark Unread";
                    updateTd.appendChild(toggleBtn);
                    updateTd.appendChild(deletBtn);
                            }
    })

    deletBtn.addEventListener("click", () => {
        if(confirm(`Are you sure that you would like to delete "${bookObjectArr[index].title}"?`)) {
                                tr.remove();
                                myLibrary.splice(index, 1);
                                tableRows.splice(index, 1);
                                createTableData(bookObjectArr);
                                console.log(myLibrary);
                            }
                            console.log("No");
    })
}

function createTableData(bookObjectArr) {

    const table = document.querySelector('tbody');
    const tr = document.createElement('tr');

    tableRows.push(tr);

    for (const [index, row] of tableRows.entries()) {

        row.classList.add(`row${index}`, 'book-row');
        
        titleTd = document.createElement('td');
        titleTd.className = `title${index}`;
        titleTd.innerHTML = bookObjectArr[index].title;
        
        authorTd = document.createElement('td');
        authorTd.className = `author${index}`;
        authorTd.innerHTML = bookObjectArr[index].author;
        
        pageNumsTd = document.createElement('td');
        pageNumsTd.className = `numpages${index}`;
        pageNumsTd.innerHTML = bookObjectArr[index].numOfPages;
        
        readStatusTd = document.createElement('td');
        readStatusTd.classList.add(`readstatus${index}`, "read-status");
        readStatusTd.innerHTML = bookObjectArr[index].getReadStatus();
        
        updateTd = document.createElement('td');
        updateTd.classList.add(`update${index}`, "update-td");
        
        let toggleButton = document.createElement('button');
        let deleteButton = document.createElement('button');
        
        deleteButton.classList.add(`deletebutton${index}`, 'delete-btn');
        toggleButton.classList.add(`togglebutton${index}`, "toggle-btn");
        deleteButton.innerHTML = "Delete";
        
        updateTd.appendChild(toggleButton);
        updateTd.appendChild(deleteButton);
        
        if(bookObjectArr[index].getReadStatus() === "Read") {
            toggleButton.innerHTML = "Mark Unread";
        } else {
            toggleButton.innerHTML = "Mark Read";
        }
        
        assignUpdateButtonEventListeners(toggleButton, deleteButton, row, index, bookObjectArr);
        
        
        // if(!rowNumClassArray.includes(`row${index}`)) {
        //     row.appendChild(titleTd);
        //     row.appendChild(authorTd);
        //     row.appendChild(pageNumsTd);
        //     row.appendChild(readStatusTd);
        //     row.appendChild(updateTd);
            
        //     table.appendChild(row);
        // }
        // rowNumClassArray.push(rowNumClass);
        
        console.log(row);
        console.log(tableRows);
    }

    // let tableElCount = table.childElementCount - 2;

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
    clearTable();
    createTableData(myLibrary);
});

