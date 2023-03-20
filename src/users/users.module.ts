import { Module } from '@nestjs/common';
import { ConfigService } from '@nestjs/config/dist';
import { UserService } from './user.service';

@Module({
    imports: [],
    controllers: [],
    providers: [UserService],
    exports: [UserService]
})
export class UsersModule {
    constructor(private readonly config: ConfigService) {
        console.log('UsersModule = ', config.get<number>("PORT"));
        console.log('UserModule = ', config.get<boolean>("LOGGING"));
    }
}
