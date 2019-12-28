import { Component, ViewChild, ElementRef } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ModalComponent } from '../CustomComponents/modal/modal.component';

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.scss']
})
/** Home component*/
export class HomeComponent {
    /** Home ctor */
    constructor() {

  }

  //To get the methods from a child component.
  @ViewChild(ModalComponent)
  modal: ModalComponent;

  infoForm = new FormGroup({
    name: new FormControl(null, Validators.required),
    lastname: new FormControl(null, Validators.required),
    mail: new FormControl(null, Validators.required),
    sport: new FormControl('', Validators.required),
  });

  SendNote() {

    if (this.infoForm.invalid)
      return;

    console.log("You have sent the information now.");
    this.modal.CloseModal();
  }

  get getName() { return this.infoForm.get('name'); }
  get getLastname() { return this.infoForm.get('lastname'); }
  get getMail() { return this.infoForm.get('mail'); }
  get getSport() { return this.infoForm.get('sport'); }

}
