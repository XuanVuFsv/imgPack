import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UploadUsersComponent } from './upload-users.component';

describe('UploadUsersComponent', () => {
  let component: UploadUsersComponent;
  let fixture: ComponentFixture<UploadUsersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UploadUsersComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UploadUsersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
