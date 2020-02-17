import { TestBed, async, ComponentFixture, ComponentFixtureAutoDetect } from '@angular/core/testing';
import { BrowserModule, By } from "@angular/platform-browser";
import { ToggleComponent } from './toggle.component';
import { SwitchComponent } from '../switch/switch.component';

let component: ToggleComponent;
let fixture: ComponentFixture<ToggleComponent>;

describe('toggle component', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ToggleComponent, SwitchComponent],
      imports: [BrowserModule],
      providers: [
        { provide: ComponentFixtureAutoDetect, useValue: true }
      ]
    });
    fixture = TestBed.createComponent(ToggleComponent);
    component = fixture.componentInstance;
  }));

  it('Shoud be undefined', () => {
    expect(component.on).toBeUndefined();
  });

  it('Shoud be true', () => {
    component.onClick();
    expect(component.on).toBe(true, 'Its now set to true');
  });

  it('Shoud be false', () => {
    component.onClick();
    component.onClick();
    expect(component.on).toBe(false, 'Its now set to false');
  });
});
