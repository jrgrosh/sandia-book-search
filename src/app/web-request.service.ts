import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { APIResponse, BookInfo, VolumeInfo } from './models';
import { Observable, map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class WebRequestService {

  constructor(private http: HttpClient) { }

  async doSimpleSearch(searchPhrase: string) : Promise<Observable<BookInfo[]>>{
    return this.http.get(`https://www.googleapis.com/books/v1/volumes?q=${searchPhrase}`).pipe(
      map(response => {
        console.log(response)
        const items = (response as APIResponse).items;

        const bookInfoList : BookInfo[] = [];

        for(let bsr of items){
         bookInfoList.push( {
            "title" : bsr.volumeInfo.title,
            "authors": bsr.volumeInfo.authors,
            "publishedDate":bsr.volumeInfo.publishedDate,
            "textSnippet" : bsr.searchInfo?.textSnippet,
            "previewLink" : bsr.volumeInfo.previewLink,
            "imageLinks" : bsr.volumeInfo.imageLinks
          })
        }

        return bookInfoList;
      }))
  }
}
