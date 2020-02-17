import { TestBed, async, ComponentFixture, ComponentFixtureAutoDetect } from '@angular/core/testing';
import { BrowserModule, By } from "@angular/platform-browser";
import { HomeComponent } from './home.component';
import { ApiService } from 'src/Services/api.service';
import { HttpClientModule } from '@angular/common/http';
import { TabelComponent } from '../tabel/tabel.component';
import { ModalComponent } from '../CustomComponents/modal/modal.component';
import { SpinnerCircleComponent } from '../CustomComponents/spinner-circle/spinner-circle.component';
import { ToggleComponent } from '../CustomComponents/toggle/toggle.component';
import { SwitchComponent } from '../CustomComponents/switch/switch.component';

let component: HomeComponent;
let fixture: ComponentFixture<HomeComponent>;

describe('Home component', () => {
    beforeEach(async(() => {
      TestBed.configureTestingModule({
        declarations: [HomeComponent, TabelComponent, ModalComponent, SpinnerCircleComponent, ToggleComponent, SwitchComponent],
          imports: [BrowserModule, HttpClientModule],
            providers: [
              { provide: ComponentFixtureAutoDetect, useValue: true },
                { provide: ApiService, useValue: true }
            ]
        });
        fixture = TestBed.createComponent(HomeComponent);
        component = fixture.componentInstance;
    }));

    it('should do something', async(() => {
        expect(true).toEqual(true);
    }));
});
