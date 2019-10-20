import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BasicGanttComponent } from './basic-gantt.component';

describe('BasicGanttComponent', () => {
  let component: BasicGanttComponent;
  let fixture: ComponentFixture<BasicGanttComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BasicGanttComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BasicGanttComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
