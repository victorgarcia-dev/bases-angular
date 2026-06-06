import { Component, signal } from '@angular/core';

import { CharacterList } from '../../../components/dragonball/character-list/character-list';
import { Character } from '../../../interfaces/character';
import { DragonballCharacterAdd } from "../../../components/dragonball/dragonball-character-add/dragonball-character-add";


@Component({
  selector: 'app-dragonball-page',
  imports: [CharacterList, DragonballCharacterAdd],
  templateUrl: './dragonball-page.html',
})
export class DragonballPage {

  characters = signal<Character[]>([
    {
      id:1, name:'goku', power:9001
    },
     {
      id:2, name:'Vegeta', power:8000
    }
  ]);

  addCharacter(character:Character){
    this.characters.update((concurrent) => [...concurrent,character])
  }

}
