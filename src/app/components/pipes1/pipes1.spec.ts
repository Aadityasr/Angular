import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Pipes1 } from './pipes1';

describe('Pipes1', () => {
  let component: Pipes1;
  let fixture: ComponentFixture<Pipes1>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Pipes1]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Pipes1);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
