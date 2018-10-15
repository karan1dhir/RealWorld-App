import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TagfeedsComponent } from './tagfeeds.component';

describe('TagfeedsComponent', () => {
  let component: TagfeedsComponent;
  let fixture: ComponentFixture<TagfeedsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TagfeedsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TagfeedsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
