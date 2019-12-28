import { Component, ViewChild, ElementRef, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ModalComponent } from '../CustomComponents/modal/modal.component';
import * as jsPDF from 'jspdf'

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
/** Home component*/
export class HomeComponent implements OnInit {
  /** Home ctor */
  constructor() {

  }

  ngOnInit(): void {
    this.CreatejsPdf();
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

  CreateThePDF() {
    var doc = new jsPDF();
    doc.text('Hello world!', 10, 10)
    doc.save('a4.pdf')
  }


  //Getters for error validations
  get getName() { return this.infoForm.get('name'); }
  get getLastname() { return this.infoForm.get('lastname'); }
  get getMail() { return this.infoForm.get('mail'); }
  get getSport() { return this.infoForm.get('sport'); }

}
