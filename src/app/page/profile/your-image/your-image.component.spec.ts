import { ComponentFixture, TestBed } from '@angular/core/testing';

import { YourImageComponent } from './your-image.component';

describe('YourImageComponent', () => {
  let component: YourImageComponent;
  let fixture: ComponentFixture<YourImageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ YourImageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(YourImageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
