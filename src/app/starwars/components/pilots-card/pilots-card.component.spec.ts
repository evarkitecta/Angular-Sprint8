import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PilotsCardComponent } from './pilots-card.component';

describe('PilotsCardComponent', () => {
  let component: PilotsCardComponent;
  let fixture: ComponentFixture<PilotsCardComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PilotsCardComponent]
    });
    fixture = TestBed.createComponent(PilotsCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
