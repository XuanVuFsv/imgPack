import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewImageCollectionComponent } from './view-image-collection.component';

describe('ViewImageCollectionComponent', () => {
  let component: ViewImageCollectionComponent;
  let fixture: ComponentFixture<ViewImageCollectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewImageCollectionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewImageCollectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
