import { Component, signal } from '@angular/core';

import { CharacterList } from '../../../components/dragonball/character-list/character-list';
import { Character } from '../../../interfaces/character';


@Component({
  selector: 'app-dragonball-page',
  imports: [CharacterList],
  templateUrl: './dragonball-page.html',
})
export class DragonballPage {
  name = signal('');
  power = signal(0);


  characters = signal<Character[]>([
    {
      id:1, name:'goku', power:9001
    },
     {
      id:2, name:'Vegeta', power:8000
    }
  ]);


  addCharacter(){
    if( !this.name() || !this.power() ||  this.power() <= 0){
      return;
    }

    const newCharacter:Character = {
      id: this.characters().length + 1,
      name: this.name(),
      power: this.power() 
    }

    this.characters.update((concurrent) => [...concurrent, newCharacter])

    this.reset();
  }

  reset(){
    this.name.set('');
    this.power.set(0);
  }
}
