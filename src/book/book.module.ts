import { MiddlewareConsumer, Module, NestModule } from "@nestjs/common";
import { BookService } from "src/book/book.service";
import { BookController } from "src/book/book.controller";
import { BookMiddleware } from "./book.middleware";

@Module({
    imports: [],
    controllers: [BookController],
    providers: [BookService]
})

export class BookModule implements NestModule {
    constructor(){
        console.log('Book Module');
    }
    configure(consumer: MiddlewareConsumer) {
        consumer.apply(BookMiddleware).forRoutes('book');
    }

}