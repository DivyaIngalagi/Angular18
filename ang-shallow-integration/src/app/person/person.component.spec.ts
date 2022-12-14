import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PersonComponent } from './person.component';

describe('PersonComponent', () => {
  let component: PersonComponent;
  let fixture: ComponentFixture<PersonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PersonComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PersonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should click Set button', (() => {
  //fixture.detectChanges();
  let buttonElement = fixture.debugElement.nativeElement.querySelector('.set-button');
  let p = fixture.debugElement.nativeElement.querySelector('p');

  buttonElement.click();
  fixture.detectChanges();

  fixture.whenStable().then(() => {
    expect(component.personName).toBe('Mahesh');
    expect(p.textContent).toBe('Mahesh');
  });
})); 
});
