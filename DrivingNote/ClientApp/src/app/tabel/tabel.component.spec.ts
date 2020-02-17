// <reference path="../../../../node_modules/@types/jasmine/index.d.ts" />
import { TestBed, async, ComponentFixture, ComponentFixtureAutoDetect } from '@angular/core/testing';
import { BrowserModule, By } from "@angular/platform-browser";
import { TabelComponent } from './tabel.component';
import { ToggleComponent } from '../CustomComponents/toggle/toggle.component';
import { SwitchComponent } from '../CustomComponents/switch/switch.component';

let component: TabelComponent;
let fixture: ComponentFixture<TabelComponent>;

describe('Tabel component', () => {
    beforeEach(async(() => {
      TestBed.configureTestingModule({
        declarations: [TabelComponent, ToggleComponent, SwitchComponent],
            imports: [ BrowserModule ],
            providers: [
                { provide: ComponentFixtureAutoDetect, useValue: true }
            ]
        });
        fixture = TestBed.createComponent(TabelComponent);
        component = fixture.componentInstance;
    }));

    it('should do something', async(() => {
        expect(true).toEqual(true);
    }));
});
