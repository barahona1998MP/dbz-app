import { Injectable } from '@angular/core';
import { Character } from '../interfaces/dbz.interface';
import { v4 as uuid } from 'uuid';
@Injectable({providedIn: 'root'})
export class DbzService {
  constructor() { }

  public characters: Character[] = []

  public _history: string[] = [];

  get charactersHistory() {
    return [...this.characters]
  }

  addCharacter(character: Character):void {

    const newCharacter: Character = {
      id: uuid(), ...character
    }

    this.characters.push(newCharacter);

    console.log(this.characters)
  }


  deleteCharacter(id: string):void {
    this.characters = this.characters.filter(character => character.id !== id)
  }

}
