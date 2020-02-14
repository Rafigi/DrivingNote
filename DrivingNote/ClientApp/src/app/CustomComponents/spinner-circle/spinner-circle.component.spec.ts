/// <reference path="../../../../../node_modules/@types/jasmine/index.d.ts" />
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
});