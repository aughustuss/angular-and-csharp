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

  constructor (private heroService: HeroService){};

  ngOnInit(): void {
    this.heroes = this.heroService.getHeroes();
    console.log(this.heroes);
  }
}
