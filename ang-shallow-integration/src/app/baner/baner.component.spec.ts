import { DebugElement } from '@angular/core';
import { ComponentFixture, TestBed, ComponentFixtureAutoDetect  } from '@angular/core/testing';
import { By } from '@angular/platform-browser';

import { BanerComponent } from './baner.component';

describe('BanerComponent', () => {
  let component: BanerComponent;
  let fixture: ComponentFixture<BanerComponent>;
  let h1:HTMLElement;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BanerComponent ],
      providers: [
        { provide: ComponentFixtureAutoDetect, useValue: true }
      ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BanerComponent);
    component = fixture.componentInstance;
    h1 = fixture.nativeElement.querySelector('h1');
    // const bannerDe: DebugElement = fixture.debugElement;
    // const h1De = bannerDe.query(By.css('h1'));
    // h1 = h1De.nativeElement;
    //fixture.detectChanges();
  });

  it('should create', () => {
    //expect(component).toBeTruthy();
    expect(component).toBeDefined();
  });

  it('should display original title after detectChanges()', () => {
    //fixture.detectChanges();
    expect(h1.textContent).toContain(component.title);
  });
});
