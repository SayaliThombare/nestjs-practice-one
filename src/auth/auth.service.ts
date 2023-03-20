import { Injectable } from "@nestjs/common";
import { JwtService } from "@nestjs/jwt";

import { User } from "src/users/user.entity";

@Injectable()
export class AuthService {
    constructor(private readonly jwtService: JwtService) {
        console.log('In auth service');
    }

    // Generate Id Card i.e generate JWT Token

    generateToken(payload: User): string {
        return this.jwtService.sign(payload);
    }
}