import {
  ComponentFixture,
  TestBed
} from '@angular/core/testing';

import {
  AllCompoundsComponent
} from './all-compounds.component';

describe('AllCompoundsComponent', () => {
  let component: AllCompoundsComponent;
  let fixture: ComponentFixture < AllCompoundsComponent > ;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AllCompoundsComponent]
    });
    fixture = TestBed.createComponent(AllCompoundsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
