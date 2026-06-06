import { Component, output, signal } from '@angular/core';
import { Character } from '../../../interfaces/character';

@Component({
  selector: 'dragonball-character-add',
  imports: [],
  templateUrl: './dragonball-character-add.html'
})
export class DragonballCharacterAdd {
    name = signal('');
    power = signal(0);

    newCharacter = output<Character>();
  
    addCharacter(){
      if( !this.name() || !this.power() ||  this.power() <= 0){
        return;
      }

      const newCharacter:Character = {
        id:Math.floor(Math.random()*1000),
        name: this.name(),
        power: this.power() 
    }

    this.newCharacter.emit(newCharacter); //le envio el nuevo personaje
    this.reset();
  }

  reset(){
    this.name.set('');
    this.power.set(0);
  }
}
