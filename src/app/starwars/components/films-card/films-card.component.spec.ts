import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FilmsCardComponent } from './films-card.component';

describe('FilmsCardComponent', () => {
  let component: FilmsCardComponent;
  let fixture: ComponentFixture<FilmsCardComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FilmsCardComponent]
    });
    fixture = TestBed.createComponent(FilmsCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
