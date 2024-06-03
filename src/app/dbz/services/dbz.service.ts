import { Injectable } from '@angular/core';
import { Character } from '../interfaces/dbz.interface';

@Injectable({providedIn: 'root'})
export class DbzService {
  constructor() { }

  public characters: Character[] = []


  addCharacter(character: Character):void {
    this.characters.push(character);
    console.log(this.characters)
  }

}
