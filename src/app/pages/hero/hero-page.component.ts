import { UpperCasePipe } from "@angular/common";
import { Component, signal } from "@angular/core";

@Component({
    templateUrl:'./hero-page.component.html',
    imports: [UpperCasePipe],
})

export class HeroPageComponent {

    name = signal('Ironman');
    age = signal(45);

    getHeroDescription(){
        return `${this.name()} - ${this.age()}`
    }

    changeHero(){
        this.name.update(() => 'Spiderman');
        this.age.update(() =>  22)
    }

    changeAge(){
        this.age.update(() =>  60)
    }

    resetForm(){
        this.name.update(()=> 'Ironman');
        this.age.update(()=> 45);
    }

}