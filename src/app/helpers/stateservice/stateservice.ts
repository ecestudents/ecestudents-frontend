import { Injectable } from '@angular/core';

@Injectable()
export class StateService {
  public menu_color;
  constructor() {
    this.menu_color = false
  }



  public footer = false;
}
