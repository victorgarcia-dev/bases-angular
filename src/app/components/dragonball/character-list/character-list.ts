import { NgClass } from '@angular/common';
import { Component, input } from '@angular/core';
import type { Character } from '../../../interfaces/character';

@Component({
  selector: 'character-list',
  imports: [NgClass],
  templateUrl: './character-list.html',
})
export class CharacterList {
  characters = input.required<Character[]>();
}
