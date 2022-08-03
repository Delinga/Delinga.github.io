let myLibrary = [];
const containerMain = document.querySelector("#mainContainer");



function Book(title = "", author = "", pages = 0, read = false){
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
}

myLibrary.push(new Book("The Hobbit1", "J. R. R. Tolkin", 295, false));
myLibrary.push(new Book("The Hobbit2", "J. R. R. Tolkin", 295, false));
myLibrary.push(new Book("The Hobbit3", "J. R. R. Tolkin", 295, false));
myLibrary.push(new Book("The Hobbit4", "J. R. R. Tolkin", 295, false));

function addBookToLibrary(){
    myLibrary.push(new Book())
}

function updateLibrary(){
    myLibrary.forEach(element => {
        const card = document.createElement('div');
        card.classList.add("bookCard");
        const ul = document.createElement('ul');
        const li_title = document.createElement('li');
        const li_author = document.createElement('li');
        const li_pages = document.createElement('li');
        const li_read = document.createElement('li');
        li_title.textContent = element.title;
        li_author.textContent = element.author;
        li_pages.textContent = element.pages + " Seiten";
        li_read.textContent = element.read;
        ul.appendChild(li_title);
        ul.appendChild(li_author);
        ul.appendChild(li_pages);
        ul.appendChild(li_read);
        card.appendChild(ul);
        containerMain.appendChild(card);
    });
}