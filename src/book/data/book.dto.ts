// export interface Book {
//     id: string;
//     title: string;
//     author: string;
//     published: string;
// }

import { IsInt, IsString } from "class-validator";

export class Book {
    @IsString()
    id: string;
    @IsString()
    title: string;
    @IsString()
    author: string;
    @IsInt()
    published: number;
}