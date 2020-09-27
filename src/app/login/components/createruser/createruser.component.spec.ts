import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateruserComponent } from './createruser.component';

describe('CreateruserComponent', () => {
  let component: CreateruserComponent;
  let fixture: ComponentFixture<CreateruserComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateruserComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateruserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
