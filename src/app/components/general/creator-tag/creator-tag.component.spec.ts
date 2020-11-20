import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreatorTagComponent } from './creator-tag.component';

describe('CreatorTagComponent', () => {
  let component: CreatorTagComponent;
  let fixture: ComponentFixture<CreatorTagComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreatorTagComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreatorTagComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
