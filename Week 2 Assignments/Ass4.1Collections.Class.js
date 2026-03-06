//Problem Statement: Library Book Management System

//Objective : Create a Book class and use it to manage a collection of books in a library.

class Book
{
/*
  Properties:
      title (string)
      author (string)
      pages (number)
      isAvailable (boolean, default: true)
 */
    title;
    author;
    pages;
    isAvailable;

    constructor(title, author, pages, isAvailable = true)
    {
        this.title = title;
        this.author = author;
        this.pages = pages;
        this.isAvailable = isAvailable;
    }

    // Marks book as borrowed
    borrow()
    {
        if(this.isAvailable)
        {
            this.isAvailable = false;
            return `${this.title} has been borrowed`;
        }
        else
        {
            return `${this.title} is already borrowed`;
        }
    }

    // Marks book as returned
    returnBook()
    {
        this.isAvailable = true;
        return `${this.title} has been returned`;
    }

    // Returns book info
    getInfo()
    {
        return `${this.title} by ${this.author} (${this.pages} pages)`;
    }

    // Check if book is long
    isLongBook()
    {
        return this.pages > 300;
    }
}


// Create 5 books
let book1 = new Book("Harry Potter", "J.K Rowling", 500);
let book2 = new Book("1984", "George Orwell", 305);
let book3 = new Book("The Hobbit", "J.R.R Tolkien", 310);
let book4 = new Book("Atomic Habits", "James Clear", 280);
let book5 = new Book("Rich Dad Poor Dad", "Robert Kiyosaki", 336);

// Store in library
let library = [book1, book2, book3, book4, book5];


// i. Display info of all books
console.log("All Books:");
library.forEach(book => console.log(book.getInfo()));


// ii. Borrow 2 books
console.log("\nBorrowing Books:");
console.log(book1.borrow());
console.log(book3.borrow());


// iii. Return 1 book
console.log("\nReturning Book:");
console.log(book1.returnBook());


// iv. Count long books
let longBooks = library.filter(book => book.isLongBook()).length;
console.log("\nNumber of long books:", longBooks);


// v. List available books
console.log("\nAvailable Books:");
library
    .filter(book => book.isAvailable)
    .forEach(book => console.log(book.title));