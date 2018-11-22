import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminCategoriesItemComponent } from './admin-categories-item.component';

describe('AdminCategoriesItemComponent', () => {
  let component: AdminCategoriesItemComponent;
  let fixture: ComponentFixture<AdminCategoriesItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminCategoriesItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminCategoriesItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
