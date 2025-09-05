import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AttDirectives } from './att-directives';

describe('AttDirectives', () => {
  let component: AttDirectives;
  let fixture: ComponentFixture<AttDirectives>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AttDirectives]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AttDirectives);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
