import { Controller, Get, Query } from '@nestjs/common';

@Controller('cat')
export class AppController {
  @Get()
  getHello(@Query() query: object): string {
    return Object.values(query).join('-');
  }
}
