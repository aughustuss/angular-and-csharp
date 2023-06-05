import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Hero } from 'src/app/models/hero';
import { HeroService } from 'src/app/services/hero.service';

@Component({
  selector: 'app-hero-edit',
  templateUrl: './hero-edit.component.html',
  styleUrls: ['./hero-edit.component.scss']
})
export class HeroEditComponent {
  @Input() hero?: Hero;
  @Output() heroesUpadated = new EventEmitter<Hero[]>();

  constructor (private heroServices: HeroService){};

  ngOnInit(): void {

  }

  updateHero(hero: Hero){
    this.heroServices.updateHero(hero).subscribe((heroes: Hero[]) => this.heroesUpadated.emit(heroes));
  }
  deleteHero(hero: Hero){
    this.heroServices.deleteHero(hero).subscribe((heroes: Hero[]) => this.heroesUpadated.emit(heroes));
  }
  createHero(hero: Hero){
    this.heroServices.createHero(hero).subscribe((heroes: Hero[]) => this.heroesUpadated.emit(heroes));
  }
}
