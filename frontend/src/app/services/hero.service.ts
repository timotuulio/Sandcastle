// src/app/services/hero.service.ts
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Hero } from '../models/hero.model';

@Injectable({ providedIn: 'root' })
export class HeroService {
  constructor(private http: HttpClient) {}

  getHeroes() {
    return this.http.get<Hero[]>('http://localhost:3000/api/hero');
  }
}




