import { Injectable } from "@nestjs/common";
import { Book } from "./data/book.dto";
import { v4 as uuidv4 } from 'uuid';

@Injectable()
export class BookService {
    public books: Book[] = [];

    // Add Book

    addBook(book: Book): string {
        // book.id = uuidv4();
        this.books.push(book);
        return 'Book has been successfully added'
    }
    // Update Book

    updateBook(book: Book): string {
        let index = this.books.findIndex((currentBook => currentBook.id === book.id));
        this.books[index] = book;
        return 'Book has been successfully updated';
    }
    
    // Delete Book

    deleteBook(bookId: string): string {
        this.books = this.books.filter(currentBook => currentBook.id !== bookId);
        return 'Book has been successfully deleted';
    }

    // findAll

    findAllBooks(): Book[] {
        return this.books;
    }

    // Find Book By Id

    findBookById(id: string): Book {
        let index = this.books.findIndex(book => book.id === id);
        return this.books[index];
    }
}