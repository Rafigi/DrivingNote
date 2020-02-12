import { Component, ViewChild, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ModalComponent } from '../CustomComponents/modal/modal.component';
import { TabelComponent } from '../tabel/tabel.component';
import { ApiService } from '../../Services/api.service';
import UserInformation from '../../Models/UserInformation';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
/** Home component*/
export class HomeComponent implements OnInit {

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

  informationForm = new FormGroup({
    name: new FormControl(null, Validators.required),
    lastname: new FormControl(null, Validators.required),
    mail: new FormControl(null, Validators.required),
    sport: new FormControl('', Validators.required),
    accountNumber: new FormControl(null, Validators.required),
  });

  SendNote() {
    if (!this.informationForm.invalid) {
      var userInformation = new UserInformation(
        this.getName.value,
        this.getLastname.value,
        this.getMail.value,
        this.getSport.value,
        this.getAccountNumber.value,
        this.table.Cells
      );
      this.apiService.SendMail(userInformation).subscribe(response => {
        let blob: any = new Blob([response], { type: 'application/pdf' });

        var fileURL = URL.createObjectURL(blob);
        window.open(fileURL);

        this.modal.CloseModal();

      }, (err: HttpErrorResponse) => {
        if (err.status == 415 || err.status == 404) {
          console.log("There is something wrong with the information ýour sending?!");
          console.log(userInformation);
        }
        if (err.status == 500) {
          console.log("There is no server to help you!");
        }
      });
    }


  }

  //Getters for error validations
  get getName() { return this.informationForm.get('name'); }
  get getLastname() { return this.informationForm.get('lastname'); }
  get getMail() { return this.informationForm.get('mail'); }
  get getSport() { return this.informationForm.get('sport'); }
  get getAccountNumber() { return this.informationForm.get('accountNumber'); }

}
