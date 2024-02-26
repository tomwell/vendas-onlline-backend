import { Body, Controller, Get, Post } from '@nestjs/common';
import { createUser } from './dtos/createUser.dto';

@Controller('user')
export class UserController {

  @Get()
  async getHello() {
    return JSON.stringify({test: 'Hello World!'});
  }

  @Post()
  async createUser(
    @Body()user: createUser) 
  {
    return {
      ...user,
      password: '******'
    }
  }
}
