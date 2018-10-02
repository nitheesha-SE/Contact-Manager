import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GroupContactRemoveFormComponent } from './group-contact-remove-form.component';

describe('GroupContactRemoveFormComponent', () => {
  let component: GroupContactRemoveFormComponent;
  let fixture: ComponentFixture<GroupContactRemoveFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GroupContactRemoveFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GroupContactRemoveFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
