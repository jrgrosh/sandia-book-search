import { Component, Input } from '@angular/core';
import { BookInfo } from '../models';

import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'decodeHTML'
})
export class DecodeHTMLPipe implements PipeTransform {
  transform(value: string): string {
    if(!value){
      return "";
    }
    value = value.replaceAll("&quot;", "\"");
    value = value.replaceAll("&#39;", "'");
    return value;
  }
}

@Pipe({
  name: 'commaSeparated'
})
export class CommaSeparatedPipe implements PipeTransform {
  transform(value: string[]): string {
    if(!value){
      return "";
    }
    return value.join(', ');
  }
}

@Component({
  selector: 'app-display-results',
  templateUrl: './display-results.component.html',
  styleUrls: ['./display-results.component.css']
})
export class DisplayResultsComponent {
  @Input() books : Array<BookInfo> = [];
  constructor() { }
}
