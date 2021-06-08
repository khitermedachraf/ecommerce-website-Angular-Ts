import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddInfoProfileComponent } from './add-info-profile.component';

describe('AddInfoProfileComponent', () => {
  let component: AddInfoProfileComponent;
  let fixture: ComponentFixture<AddInfoProfileComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddInfoProfileComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddInfoProfileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
