import { Injectable } from '@nestjs/common';
import { BookModel } from './book.model';

@Injectable()
export class AppService {
  // Model
  public books: BookModel[] = [
    {title: 'Harry Potter', author: 'JK Rowling', published: 2012},
    {title: 'Davin Ci Code', author: 'Dan Brown', published: 2015},
    {title: 'Harry Potter Deathly Hollows', author: 'JK Rowling', published: 2017}
  ];

  getHello(): string {
    return 'Hello Nest!';
  }

  getAllBooks(): BookModel[] {
    return this.books;
  }
}
