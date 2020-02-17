import { TestBed, async, ComponentFixture, ComponentFixtureAutoDetect } from '@angular/core/testing';
import { BrowserModule, By } from "@angular/platform-browser";
import { SpinnerCircleComponent } from './spinner-circle.component';

let component: SpinnerCircleComponent;
let fixture: ComponentFixture<SpinnerCircleComponent>;

describe('spinnerCircle component', () => {
    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [ SpinnerCircleComponent ],
            imports: [ BrowserModule ],
            providers: [
                { provide: ComponentFixtureAutoDetect, useValue: true }
            ]
        });
        fixture = TestBed.createComponent(SpinnerCircleComponent);
        component = fixture.componentInstance;
    }));

    it('should do something', async(() => {
        expect(true).toEqual(true);
    }));

  it('should not spin', () => {
    const spinner = new SpinnerCircleComponent();
    expect(spinner.show).toBe(false, 'Should not spin');
  });


  it('should spin', () => {
    const spinner = new SpinnerCircleComponent();
    spinner.show = true;

    expect(spinner.show).toBe(true, 'Should spin');
  });
});
