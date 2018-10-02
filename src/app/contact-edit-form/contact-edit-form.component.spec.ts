import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ContactEditFormComponent } from './contact-edit-form.component';

describe('ContactEditFormComponent', () => {
  let component: ContactEditFormComponent;
  let fixture: ComponentFixture<ContactEditFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ContactEditFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ContactEditFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
