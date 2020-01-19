import { Component, ViewChild, ElementRef, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ModalComponent } from '../CustomComponents/modal/modal.component';
import { TabelComponent } from '../tabel/tabel.component';
import { ApiService } from '../../Services/api.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
/** Home component*/
export class HomeComponent implements OnInit {

  private _elementData: string;

  /** Home ctor */
  constructor(private apiService: ApiService) {

  }

  ngOnInit(): void {
  }

  //To get the methods from a child component.
  @ViewChild(ModalComponent)
  modal: ModalComponent;

  @ViewChild(TabelComponent)
  table: TabelComponent;

  infoForm = new FormGroup({
    name: new FormControl(null, Validators.required),
    lastname: new FormControl(null, Validators.required),
    mail: new FormControl(null, Validators.required),
    sport: new FormControl('', Validators.required),
  });


  SendNote() {

    if (this.infoForm.invalid)
      return;

    this.apiService.SendMail(this._elementData);
    this.modal.CloseModal();
  }





  //Getters for error validations
  get getName() { return this.infoForm.get('name'); }
  get getLastname() { return this.infoForm.get('lastname'); }
  get getMail() { return this.infoForm.get('mail'); }
  get getSport() { return this.infoForm.get('sport'); }

}
