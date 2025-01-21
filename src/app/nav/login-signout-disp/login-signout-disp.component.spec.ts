import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginSignoutDispComponent } from './login-signout-disp.component';

describe('LoginSignoutDispComponent', () => {
  let component: LoginSignoutDispComponent;
  let fixture: ComponentFixture<LoginSignoutDispComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LoginSignoutDispComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LoginSignoutDispComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
