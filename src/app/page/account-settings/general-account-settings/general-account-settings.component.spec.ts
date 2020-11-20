import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GeneralAccountSettingsComponent } from './general-account-settings.component';

describe('GeneralAccountSettingsComponent', () => {
  let component: GeneralAccountSettingsComponent;
  let fixture: ComponentFixture<GeneralAccountSettingsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GeneralAccountSettingsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GeneralAccountSettingsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
