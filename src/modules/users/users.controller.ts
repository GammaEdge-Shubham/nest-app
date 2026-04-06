import { Body, Controller, Get, Injectable, Post } from '@nestjs/common';
import { UsersService } from './users.service';
import { CreateUserDto } from './dtos/create-user.dto';
import { LoginUserDto } from './dtos/login-user.dto';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}
  @Post('/signup')
  createUser(@Body() user: CreateUserDto) {
    return this.usersService.create(user);
  }

  @Get()
  getAllUsers() {
    return this.usersService.findAll();
  }

  @Post('/login')
  loginUser(@Body() data: LoginUserDto) {
    return this.usersService.login(data);
  }
}
