import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LayoutAuthPageComponent } from './layout-auth-page.component';

describe('LayoutAuthPageComponent', () => {
  let component: LayoutAuthPageComponent;
  let fixture: ComponentFixture<LayoutAuthPageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LayoutAuthPageComponent]
    });
    fixture = TestBed.createComponent(LayoutAuthPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
