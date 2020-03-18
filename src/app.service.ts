import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  private words = [
    'Mercury',
    'Venus',
    'Earth',
    'Mars',
    'Jupiter',
    'Saturn',
    'Uranus',
    'Neptune',
    // Pluto is not a planet
  ];

  getHello(): string {
    const index = Math.floor(Math.random() * 8);

    return this.words[index];
  }
}
