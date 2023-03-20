import { Injectable } from "@nestjs/common";
import { CONSTANTS } from "src/constants";
import { User } from "./user.entity";

@Injectable()
export class UserService {
    public users: User[] = [
        {
            username: 'User1',
            password: '1234',
            email:'thombaresayali@gmail.com',
            role: CONSTANTS.ROLES.ANDROID_DEVELOPER
        },
        {
            username: 'User2',
            password: '5678',
            email: 'sumitthombare@gmail.com',
            role: CONSTANTS.ROLES.WEB_DEVELOPER
        },
        {
            username: 'User3',
            password: '9876',
            email: 'user3@gmail.com',
            role: CONSTANTS.ROLES.WEB_DEVELOPER
        }
    ];

    getUserByName(name:string) : User {
        let user = this.users.find(user => {
            if(user.username === name) return user;
        });
        return user;
    }
}