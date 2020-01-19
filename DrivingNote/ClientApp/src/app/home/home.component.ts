import { Component, ViewChild, ElementRef, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ModalComponent } from '../CustomComponents/modal/modal.component';
import { TabelComponent } from '../tabel/tabel.component';
import { ApiService } from '../../Services/api.service';
import UserInfo from '../../Models/UserInfo';


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
    accountNumber: new FormControl(null, Validators.required),
  });


  SendNote() {
    console.log("Send");


    if (!this.infoForm.invalid) {
      var userInfo = new UserInfo(
        this.getName.value,
        this.getLastname.value,
        this.getMail.value,
        this.getSport.value,
        this.getAccountNumber.value,
        this._elementData
      )

      console.log("Send");
      this.infoForm.reset;
      this.apiService.SendMail(userInfo).subscribe((response) => {
        //if (response == 'Ok')
        this.modal.CloseModal();
      });
    }
  }





  //Getters for error validations
  get getName() { return this.infoForm.get('name'); }
  get getLastname() { return this.infoForm.get('lastname'); }
  get getMail() { return this.infoForm.get('mail'); }
  get getSport() { return this.infoForm.get('sport'); }
  get getAccountNumber() { return this.infoForm.get('accountNumber'); }

}
