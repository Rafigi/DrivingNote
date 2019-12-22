import { Component, Input } from '@angular/core';

@Component({
    selector: 'app-switch',
    templateUrl: './switch.component.html',
    styleUrls: ['../toggle/toggle.component.scss']
})
/** switch component*/
export class SwitchComponent {

  @Input() on: boolean;
    /** switch ctor */
    constructor() {

    }
}
