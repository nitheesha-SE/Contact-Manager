import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GroupContactAddFormComponent } from './group-contact-add-form.component';

describe('GroupContactAddFormComponent', () => {
  let component: GroupContactAddFormComponent;
  let fixture: ComponentFixture<GroupContactAddFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GroupContactAddFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GroupContactAddFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
