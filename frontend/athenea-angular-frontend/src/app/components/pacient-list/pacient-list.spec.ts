import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PacientList } from './pacient-list';

describe('PacientList', () => {
  let component: PacientList;
  let fixture: ComponentFixture<PacientList>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PacientList]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PacientList);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
