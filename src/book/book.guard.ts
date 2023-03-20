import { CanActivate, ExecutionContext, Injectable } from "@nestjs/common";
import {Request} from 'express';

@Injectable()
export class BookGuard implements CanActivate {
    
    public userName: string = "Sayali Sarode";
    public password: string = '1234';
    canActivate(context: ExecutionContext): boolean {
        const ctx = context.switchToHttp();
        const request = ctx.getRequest<Request>();

        if(request.header('userName') == undefined || request.header('password') == undefined) return false;

        return request.header('userName') === this.userName && request.header('password') === this.password;
    }
}