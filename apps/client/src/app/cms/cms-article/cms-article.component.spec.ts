import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CmsArticleComponent } from './cms-article.component';

describe('CmsArticleComponent', () => {
  let component: CmsArticleComponent;
  let fixture: ComponentFixture<CmsArticleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CmsArticleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CmsArticleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
