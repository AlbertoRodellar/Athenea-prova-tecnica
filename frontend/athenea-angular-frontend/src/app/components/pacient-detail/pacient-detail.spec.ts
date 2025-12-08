import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PacientDetail } from './pacient-detail';

describe('PacientDetail', () => {
  let component: PacientDetail;
  let fixture: ComponentFixture<PacientDetail>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PacientDetail]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PacientDetail);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
