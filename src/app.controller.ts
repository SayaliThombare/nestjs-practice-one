import { Controller, Get, UseGuards, Request, Post, Res } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport/dist';
import { AppService } from './app.service';
import { AuthService } from './auth/auth.service';
import { CONSTANTS } from './constants';
import { RoleGuard } from './users/role.guard';
import { Response } from 'express';


@Controller()
export class AppController {
  // integration of model with the component
  constructor(private readonly appService: AppService, private readonly authService: AuthService) {}

  // @Get()
  // getHello(): string {
  //   return this.appService.getHello();
  // }

  @Get('/authenticate')
  @UseGuards(AuthGuard('local'))
  getPrivateData(@Request() req): string {
    return req.user;
  }

  @Post('/login')
  @UseGuards(AuthGuard('local'))
  login(@Request() req): string {
    // Authentication complete
    // Next Step Authorize
    // Id card generation i.e jwt token creation
    const token = this.authService.generateToken(req.user);
    return token;
  }

  @Get('/android-developer')
  @UseGuards(AuthGuard('jwt'), new RoleGuard(CONSTANTS.ROLES.ANDROID_DEVELOPER))
  androidDeveloperData(@Request() req): string {
    return 'This is private data for android developer' + JSON.stringify(req.user);
  }

  @Get('/web-developer')
  @UseGuards(AuthGuard('jwt'), new RoleGuard(CONSTANTS.ROLES.WEB_DEVELOPER))
  webDeveloper(@Request() req): string {
    return 'This is private data for web developer' + JSON.stringify(req.user);
  }

  // controller model view
  @Get()
  getView(@Res() res: Response): any {
    return res.render('index', { books: this.appService.getAllBooks() });
  }
}
