import { Component, EventEmitter, Input } from '@angular/core';
import { Character } from '../../interfaces/dbz.interface';

@Component({
  selector: 'dbz-list-character',
  templateUrl: './list-character.component.html',
  styleUrl: './list-character.component.css'
})
export class ListCharacterComponent {

  @Input()
  public characters: Character[] = []


  




}
