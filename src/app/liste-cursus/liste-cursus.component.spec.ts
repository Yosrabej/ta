import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListeCursusComponent } from './liste-cursus.component';

describe('ListeCursusComponent', () => {
  let component: ListeCursusComponent;
  let fixture: ComponentFixture<ListeCursusComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListeCursusComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListeCursusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
