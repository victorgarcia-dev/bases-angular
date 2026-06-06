import { effect, Injectable, signal } from '@angular/core';
import { Character } from '../interfaces/character';

const loadFromlocalStorage = ():Character[] => {
   const characters = localStorage.getItem('characters');
   return characters ? JSON.parse(characters) : [];
}

@Injectable({providedIn: 'root'})
export class DragonBallService {
    
    
  characters = signal<Character[]>(loadFromlocalStorage());

  addCharacter(character:Character){
    this.characters.update((concurrent) => [...concurrent,character])
  }


  saveToLocalStorage= effect(()=>{
    localStorage.setItem('characters',JSON.stringify(this.characters()));
  })
    
}