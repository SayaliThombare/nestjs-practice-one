import { CallHandler, ExecutionContext, Injectable, NestInterceptor } from "@nestjs/common";
import { map, Observable } from "rxjs";
import {Request} from 'express';

@Injectable()
export class BookInterceptor implements NestInterceptor {
    intercept(context: ExecutionContext, next: CallHandler<any>): Observable<any> {
        console.log('This is interceptor.');
        const ctx = context.switchToHttp();
        const request = ctx.getRequest<Request>();
        request.body.name = 'This is name in request'
        return next.handle().pipe(map(data => {
            data = 'Response modified by interceptor';
            return data;
        }));
    }
}