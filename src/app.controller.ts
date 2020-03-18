import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('/maratona')
  getHello(): string {
    return `Hello ${this.appService.getHello()}`;
  }
}
