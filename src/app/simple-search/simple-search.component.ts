import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-simple-search',
  templateUrl: './simple-search.component.html',
  styleUrls: ['./simple-search.component.css']
})
export class SimpleSearchComponent {
  @Output() searchEvent = new EventEmitter<string>();
  @Input() HttpError : boolean = false;

  public searchPhrase : string = "";

  constructor() { }

  clickSearch(): void {
    if(!this.searchPhrase){
      return;
    }
    this.searchEvent.emit(this.searchPhrase);
    this.searchPhrase = "";
  }

}
