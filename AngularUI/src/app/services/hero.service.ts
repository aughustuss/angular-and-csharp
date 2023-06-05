import { Injectable } from '@angular/core';
import { Hero } from '../models/hero';

@Injectable({
  providedIn: 'root'
})
export class HeroService {

  constructor() {}
  public getHeroes(): Hero[]{
    let hero = new Hero();
    hero.id = 1;
    hero.heroName = 'Spider Man';
    hero.firstName = 'Peter';
    hero.lastName = 'Parker' ;
    hero.place = 'New York';
    return [hero];
  };
}
