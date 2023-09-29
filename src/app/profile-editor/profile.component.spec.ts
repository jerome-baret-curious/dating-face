import { TestBed } from '@angular/core/testing';
import { ProfileComponent } from './profile.component';

describe('AppComponent', () => {
  beforeEach(() =>
    TestBed.configureTestingModule({
      declarations: [ProfileComponent],
    })
  );

  it('should create the app', () => {
    const fixture = TestBed.createComponent(ProfileComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have as title 'dating-face'`, () => {
    const fixture = TestBed.createComponent(ProfileComponent);
    const app = fixture.componentInstance;
    expect(app.title).toEqual('dating-face');
  });

  it('should render title', () => {
    const fixture = TestBed.createComponent(ProfileComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('.content span')?.textContent).toContain(
      'dating-face app is running!'
    );
  });
});
