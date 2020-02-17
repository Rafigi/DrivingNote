import { Component, Input } from '@angular/core';

@Component({
    selector: 'app-spinner-circle',
    templateUrl: './spinner-circle.component.html',
    styleUrls: ['./spinner-circle.component.scss']
})
/** spinnerCircle component*/
export class SpinnerCircleComponent {

  @Input() text: string = "Loading";
  @Input() show: boolean = false;
  @Input() circleColor: string;
    /** spinnerCircle ctor */
    constructor() {

    }
}
