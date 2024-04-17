import { Injectable } from '@nestjs/common';

@Injectable() // Métodos del modelo
export class AppService {
  getHello(): string {
    return 'Hello World!';
  }
}
