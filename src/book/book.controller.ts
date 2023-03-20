import { BadRequestException, Body, Controller, Delete, Get, Param, Post, Put, Req, Res, UseFilters, UseGuards, UseInterceptors, ValidationPipe } from "@nestjs/common";
import { BookService } from "src/book/book.service";
import { BookException } from "./book.exception";
import { BookCustomExceptionFilter } from "./book.exception.filter";
import { BookGuard } from "./book.guard";
import { BookInterceptor } from "./book.interceptor";
import { Book } from "./data/book.dto";
import {Request, Response} from 'express';
// import { BookPipe } from "./utils/book.pipe";

@Controller('book')
export class BookController {

    constructor(private bookService: BookService){}

    @Get('/findAll')
    @UseGuards(new BookGuard())
    getAllBooks(): Book[] {
        return this.bookService.findAllBooks();
    }

    // @Get('/interceptor')
    // @UseInterceptors(BookInterceptor)
    // Interceptor does not work with express it works with nest only.
    // getDataFromInterceptor(@Req() req: Request, @Res() res: Response): any {
    //     // return res.json(req.body);
    //     return res.send('This is the response send by controller');
    // }

    @Get('/interceptor')
    @UseInterceptors(BookInterceptor)
    getDataFromInterceptor(): any {
        return 'This is the response send by controller';
    }

    @Put('/update')
    updateBook(@Body() book: Book): string {
        return this.bookService.updateBook(book);
    }

    @Delete('/delete/:id')
    deleteBook(@Param('id') bookId: string): string {
        return this.bookService.deleteBook(bookId);
    }

    @Post('/add')
    addBook(@Body(new ValidationPipe()) book: Book): string {
        return this.bookService.addBook(book);
    }

    @Get('findById/:id')
    findBookById(@Param('id') bookId: string ) : Book {
        return this.bookService.findBookById(bookId);
    }

    @Get('')
    @UseFilters(BookCustomExceptionFilter)
    helloBookApi(): string {
        // throw new BadRequestException({
        //     status: 400,
        //     error: 'This is my custom error message'
        // });

        throw new BookException();

        return 'This is the hello book api';
    }
}