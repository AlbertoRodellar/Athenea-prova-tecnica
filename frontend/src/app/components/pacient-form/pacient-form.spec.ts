import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { PacientFormComponent } from './pacient-form';

describe('PacientFormComponent', () => {
  let component: PacientFormComponent;
  let fixture: ComponentFixture<PacientFormComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      imports: [PacientFormComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(PacientFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
