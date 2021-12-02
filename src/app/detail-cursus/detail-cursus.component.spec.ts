import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailCursusComponent } from './detail-cursus.component';

describe('DetailCursusComponent', () => {
  let component: DetailCursusComponent;
  let fixture: ComponentFixture<DetailCursusComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetailCursusComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailCursusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
