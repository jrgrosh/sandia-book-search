import { Component } from '@angular/core';
import { WebRequestService } from './web-request.service';
import { BookInfo, VolumeInfo } from './models';


const SEARCH_STATE = "SEARCH";
const RESULT_STATE = "RESULTS";
const LOADING_STATE = "LOADING";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {


  public app_state : string = SEARCH_STATE;
  public bookInfoList: BookInfo[] = [];
  public HttpError : boolean = false;

  constructor(private wsr: WebRequestService){
  }
  isSearchState(){
    return this.app_state === SEARCH_STATE;
  }
  isResultState(){
    return this.app_state === RESULT_STATE;
  }
  isLoadingState(){
    return this.app_state === LOADING_STATE;
  }

  clickNewSearch(){
    this.app_state = SEARCH_STATE;
  }

  async handleSimpleSearchEvent(searchPhrase: string){
    this.app_state = LOADING_STATE;

    (await this.wsr.doSimpleSearch(searchPhrase)).subscribe(
      (vil) => {
        this.bookInfoList = vil;
        this.HttpError = false;
        this.app_state = RESULT_STATE;
      }, (err) => {
        console.error(err);
        this.HttpError = true;
        this.app_state = SEARCH_STATE;
      }
    );
  }
}
