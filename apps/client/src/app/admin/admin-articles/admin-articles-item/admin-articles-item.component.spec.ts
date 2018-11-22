import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminArticlesItemComponent } from './admin-articles-item.component';

describe('AdminArticlesItemComponent', () => {
  let component: AdminArticlesItemComponent;
  let fixture: ComponentFixture<AdminArticlesItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminArticlesItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminArticlesItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
