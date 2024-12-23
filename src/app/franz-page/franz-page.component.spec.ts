import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FranzPageComponent } from './franz-page.component';

describe('FranzPageComponent', () => {
  let component: FranzPageComponent;
  let fixture: ComponentFixture<FranzPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FranzPageComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FranzPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
