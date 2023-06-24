import {
  ComponentFixture,
  TestBed
} from '@angular/core/testing';

import {
  CompoundInfoComponent
} from './compound-info.component';

describe('CompoundInfoComponent', () => {
  let component: CompoundInfoComponent;
  let fixture: ComponentFixture < CompoundInfoComponent > ;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CompoundInfoComponent]
    });
    fixture = TestBed.createComponent(CompoundInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
