import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestSvgComponentComponent } from './test-svg-component.component';

describe('TestSvgComponentComponent', () => {
  let component: TestSvgComponentComponent;
  let fixture: ComponentFixture<TestSvgComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestSvgComponentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TestSvgComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
