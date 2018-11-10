import { Injectable, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import { Subject, Subscription } from 'rxjs';
import { SearchInputModel } from './search-input.model';

@Injectable({
  providedIn: 'root'
})
export class SearchService implements OnDestroy {

  private subs: Subscription[] = [];
  private searchInput: SearchInputModel | null = null;
  public searchSubj = new Subject<SearchInputModel>();

  public constructor (
    private router: Router
  ) {
    this.searchSubj.subscribe((input: SearchInputModel) => {
      this.searchInput = input;
      this.router.navigate(['/', 'search']);
    });
  }

  public ngOnDestroy(): void {
    this.subs.forEach((sub) => {
      sub.unsubscribe();
    });
  }

  public getSearchInput(): SearchInputModel {
    return this.searchInput;
  }
}
