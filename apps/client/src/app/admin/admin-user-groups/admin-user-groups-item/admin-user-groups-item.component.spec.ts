import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminUserGroupsItemComponent } from './admin-user-groups-item.component';

describe('AdminUserGroupsItemComponent', () => {
  let component: AdminUserGroupsItemComponent;
  let fixture: ComponentFixture<AdminUserGroupsItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminUserGroupsItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminUserGroupsItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
