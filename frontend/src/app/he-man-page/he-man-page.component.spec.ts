import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeManPageComponent } from './he-man-page.component';

describe('HeManPageComponent', () => {
  let component: HeManPageComponent;
  let fixture: ComponentFixture<HeManPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HeManPageComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HeManPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
