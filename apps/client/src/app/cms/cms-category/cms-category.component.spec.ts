import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CmsCategoryComponent } from './cms-category.component';

describe('CmsCategoryComponent', () => {
  let component: CmsCategoryComponent;
  let fixture: ComponentFixture<CmsCategoryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CmsCategoryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CmsCategoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
