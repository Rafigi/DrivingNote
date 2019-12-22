/// <reference path="../../../../../node_modules/@types/jasmine/index.d.ts" />
import { TestBed, async, ComponentFixture, ComponentFixtureAutoDetect } from '@angular/core/testing';
import { BrowserModule, By } from "@angular/platform-browser";
import { ToggleComponent } from './toggle.component';

let component: ToggleComponent;
let fixture: ComponentFixture<ToggleComponent>;

describe('toggle component', () => {
    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [ ToggleComponent ],
            imports: [ BrowserModule ],
            providers: [
                { provide: ComponentFixtureAutoDetect, useValue: true }
            ]
        });
        fixture = TestBed.createComponent(ToggleComponent);
        component = fixture.componentInstance;
    }));

    it('should do something', async(() => {
        expect(true).toEqual(true);
    }));
});