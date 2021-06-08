import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SpecialflightComponent } from './specialflight.component';

describe('SpecialflightComponent', () => {
  let component: SpecialflightComponent;
  let fixture: ComponentFixture<SpecialflightComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SpecialflightComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SpecialflightComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
