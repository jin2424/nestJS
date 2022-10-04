import { Controller, Get, Post, Query } from '@nestjs/common';
import { ApiOperation } from '@nestjs/swagger';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('hello')
  @ApiOperation({summary : '홍길동님 반겨주기 API' })
  getHello( @Query('name') name : string){
    return `${name}님. 안녕하세요`
  }
}
