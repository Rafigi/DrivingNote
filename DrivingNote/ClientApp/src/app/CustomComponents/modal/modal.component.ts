import { Component, Output, EventEmitter, Input, ElementRef, OnInit, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss']
})
/** Modal component*/
export class ModalComponent implements OnInit {

  private Show: boolean = true;
  private element: any;

  /** Modal ctor */
  constructor(private el: ElementRef) {
    this.element = el.nativeElement;
  }

  ngOnInit(): void {

    // move element to bottom of page (just before </body>) so it can be displayed above everything else
    document.body.appendChild(this.element);

    // close modal on background click
    this.element.addEventListener('click', el => {
      if (el.target.className == 'modalBox') {
        this.CloseModal();
      }
    });
  }

  OpenModal() {
    this.Show = true;
  }

  CloseModal() {
    this.Show = false;
  }

}
