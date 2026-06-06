import { Component, inject} from '@angular/core';

import { CharacterList } from '../../../components/dragonball/character-list/character-list';

import { DragonballCharacterAdd } from "../../../components/dragonball/dragonball-character-add/dragonball-character-add";
import { DragonBallService } from '../../../services/dragonball.service';


@Component({
  selector: 'app-dragonball-page',
  imports: [CharacterList, DragonballCharacterAdd],
  templateUrl: './dragonball-page.html',
})
export class DragonballPage {
   public dragonballService = inject(DragonBallService)

}
