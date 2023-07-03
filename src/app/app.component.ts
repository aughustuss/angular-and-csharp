import { Component } from '@angular/core';
import { Hero } from './models/hero';
import { HeroService } from './services/hero.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'AngularUI';
  heroes: Hero[] = [];
  heroeToEdit?: Hero;

  constructor(private heroService: HeroService) { };

  ngOnInit(): void {
    this.heroService.getHeroes().subscribe((result: Hero[]) => (this.heroes = result));
  };

  updateHeroList(heroes: Hero[]){
    this.heroes = heroes;
  }

  createNewHero() {
    this.heroeToEdit = new Hero();
  };

  editHero(hero: Hero) {
    this.heroeToEdit = hero;
  }
}
