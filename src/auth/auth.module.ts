import { Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
import { PassportModule } from '@nestjs/passport';
import { UsersModule } from 'src/users/users.module';
import { AuthService } from './auth.service';
import { PassportJWTStrategy } from './passport.jwt.strategy';
import { PassportLocalStrategy } from './passport.local.strategy';

@Module({
    imports: [UsersModule, PassportModule,
        JwtModule.register({
            secret: 'key',
            signOptions: {
                expiresIn: '60s'
            }
        })
    ],
    controllers: [],
    providers: [PassportLocalStrategy, AuthService, PassportJWTStrategy],
    exports: [AuthService]
})
export class AuthModule {
    constructor() {
        console.log('Auth Module');
    }
}
