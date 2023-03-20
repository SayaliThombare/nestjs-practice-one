import { ArgumentMetadata, BadRequestException, PipeTransform } from "@nestjs/common";
import { plainToInstance } from "class-transformer";
import { validate } from "class-validator";
import { Book } from "../data/book.dto";

export class BookPipe implements PipeTransform {
    // transform(value: any, metadata: ArgumentMetadata) {
    //     console.log('value = ', value);
    //     if (value.id == 1) {
    //         return true;
    //     } else {
    //         throw new BadRequestException('Validation Failed');
    //     }
    // }

    async transform(value: any, metadata: ArgumentMetadata) : Promise<any> {
        const bookClass = plainToInstance(Book, value);

        const errors = await validate(bookClass);

        if(errors.length > 0) {
            throw new BadRequestException(`Validation Failed - ${JSON.stringify(errors)}`);
        }

        console.log('value = ', value, typeof value);

        return value;
    }

}

