import { Component } from '@angular/core';
import { DbzService } from '../../services/dbz.service';
import { Character } from '../../interfaces/dbz.interface';

@Component({
  selector: 'dbz-main-page',
  templateUrl: './main-page.component.html',
  styleUrl: './main-page.component.css'
})
export class MainPageComponent {
  constructor(private dbzService:DbzService) {}


  get characters() {
    return [...this.dbzService.characters]
  }

  onNewCharacter(character:Character):void {
    this.dbzService.addCharacter(character)
  }
}
