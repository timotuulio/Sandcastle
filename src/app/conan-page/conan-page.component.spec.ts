import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConanPageComponent } from './conan-page.component';

describe('ConanPageComponent', () => {
  let component: ConanPageComponent;
  let fixture: ComponentFixture<ConanPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ConanPageComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ConanPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
