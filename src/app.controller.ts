import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';

@Controller() // Constructor
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get() // Routing
  getHello(): string {
    return this.appService.getHello();
  }
}
