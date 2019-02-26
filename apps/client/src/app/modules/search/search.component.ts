import { SearchInputModel } from './search-input.model';
import { Component, OnInit } from '@angular/core';
import { SearchService } from './search.service';

@Component({
  selector: 'nearest-stars-search',
  templateUrl: './search.component.html',
})
export class SearchComponent implements OnInit {

  public searchInput: SearchInputModel | null = null;

  constructor(
    private searchServ: SearchService
  ) {
  }

  ngOnInit() {
    this.searchInput = this.searchServ.getSearchInput();
    this.searchServ.searchSubj.subscribe(
      (searchInput) => {
        this.searchInput = searchInput;
      }
    );
  }

}
