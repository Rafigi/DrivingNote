import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Cell } from '../../Models/Cell';
declare var google; //Need to declare google, so the script will work.

@Component({
  selector: 'app-tabel',
  templateUrl: './tabel.component.html',
  styleUrls: ['./tabel.component.scss']
})
/** Tabel component*/
export class TabelComponent implements OnInit {
  //Variables 
  Cells: Cell[] = [];
  private id: number = 0;
  _roundTrip: boolean = false;

  private startAddressResult: string;
  private endAddressResult: string;
  private distanceResult: string;

  @ViewChild('startAddressRef')
  startAddressRef: ElementRef;

  @ViewChild('endAddressRef')
  endAddressRef: ElementRef;

  options: any = {
    componentRestrictions: { country: 'dk' }
  };

  //Forms
  cellForm = new FormGroup({
    date: new FormControl(this.CreateDateOfToday()),
    startAddress: new FormControl(null, Validators.required),
    endAddress: new FormControl(null, Validators.required),
    distance: new FormControl('')
  });

  ngOnInit() {
    this.CreateGoogleAutoScript();
    this.cellForm.get("distance").disable();
  }


  //FakeInput() {
  //  let newCell: Cell = {
  //    id: 1,
  //    Date: "2020-02-15",
  //    StartAddress: "Lavlandsvej 21, 4400 Kalundborg, Danmark",
  //    EndAddress: "Valløesgade 2, 7100 Vejle, Danmark",
  //    RoundTrip: "Ja",
  //    Distance: "186 km"
  //  }
  //  this.Cells.push(newCell);
  //}

  /** Table ctor */
  constructor() {

  }

  getCellCount() {
    return this.Cells.length;
  }

  private CreateDateOfToday(): string {
    let today = new Date();
    let dd: string = today.getDate().toString();
    let mm: string = (today.getMonth() + 1).toString(); //January is 0!

    let yyyy = today.getFullYear();
    if (parseInt(dd) < 10) {
      dd = '0' + dd.toString();
    }
    if (parseInt(mm) < 10) {
      mm = '0' + mm;
    }
    return yyyy + '-' + mm + '-' + dd;
  }


  initStartInput(event) {
    let input = this.startAddressRef.nativeElement;
    new google.maps.places.Autocomplete(input, this.options);
    this.CalculateDistanceFromTheTwoInputs();
    //Need this because, when user press. "Enter" then the form will be reset to length 0.
    if (event.key == "Enter") {
      this.cellForm.get("startAddress").setValue(input.value);
    }
  }

  initEndInput(event) {
    let input = this.endAddressRef.nativeElement;
    new google.maps.places.Autocomplete(input, this.options);
    this.CalculateDistanceFromTheTwoInputs();

    //Need this because, when user press. "Enter" then the form will be reset to length 0.
    if (event.key == "Enter") {
      this.cellForm.get("endAddress").setValue(input.value);
    }
  }

  private CalculateDistanceFromTheTwoInputs() {
    if (this.cellForm.invalid)
      return;

    let startInput: string = this.cellForm.get("startAddress").value;
    let endInput: string = this.cellForm.get("endAddress").value;

    //We need first to calculate, when there i more than 5 letters, when start and end address. 
    if (startInput.length > 5 && endInput.length > 5) {
      var service = new google.maps.DistanceMatrixService();
      service.getDistanceMatrix(
        {
          origins: [startInput],
          destinations: [endInput],
          travelMode: 'DRIVING',
          avoidHighways: false,
          avoidTolls: false
        }, ((response, status) => {
          let result = response.rows[0].elements[0];
          if (status == "OK" && result.status == "OK") {
            this.startAddressResult = response.originAddresses;
            this.endAddressResult = response.destinationAddresses;

            this.calculateDistance(result.distance.text);
            this.cellForm.get("distance").setValue(this.distanceResult);
          }
        }));
    }
  }

  private calculateDistance(input: string) {
    let distanceArray = input.split(" ");

    if (this._roundTrip == true) {
      let newDistance = parseFloat(distanceArray[0]) * 2;
      this.distanceResult = newDistance + " " + distanceArray[1];
    }
    else {
      this.distanceResult = distanceArray[0] + " " + distanceArray[1];
    }
  }

  RouteTripSwitch(value) {
    this._roundTrip = value;
    this.CalculateDistanceFromTheTwoInputs();
  }


  public addCell(): void {

    if (!this.cellForm.invalid) {
      let newCell: Cell = {
        id: this.id,
        Date: this.cellForm.get("date").value,
        StartAddress: this.startAddressResult[0],
        EndAddress: this.endAddressResult[0],
        RoundTrip: this._roundTrip ? "Ja" : "Nej",
        Distance: this.distanceResult
      }

      //Need these, so the input har untouched again, when a new cell is added to the table.
      this.getStartAddress.markAsUntouched();
      this.getEndAddress.markAsUntouched();

      this.Cells.push(newCell);
      this.id++;
      this.clearForms();
    }
    else {
      this.IsAdressesFilled();
    }
  }

  private IsAdressesFilled(): void {
    if (this.getStartAddress.untouched) {
      this.getStartAddress.markAsTouched();
    }
    if (this.getEndAddress.untouched) {
      this.getEndAddress.markAsTouched();
    }
  }


  public deleteCell(cell: Cell): void {
    let index = this.Cells.indexOf(cell);
    if (index != -1) {
      //This is to remove the object in the right index.
      this.Cells.splice(index, 1);
    }
  }

  //The actually clear for reactive forms will not clear all the forms.
  private clearForms() {
    this.cellForm.get("date").setValue(this.CreateDateOfToday());
    this.cellForm.get("startAddress").reset();
    this.cellForm.get("endAddress").reset();
    this._roundTrip = false;
    this.cellForm.get("distance").setValue('');
  }

  //getters for the forms, so we can to error control.
  get getStartAddress() { return this.cellForm.get('startAddress'); }
  get getEndAddress() { return this.cellForm.get('endAddress'); }

  //For Creating a script outside of the index.html file. 
  private CreateGoogleAutoScript() {
    return new Promise(resolve => {
      const scriptElement = document.createElement('script');
      scriptElement.src = `https://maps.googleapis.com/maps/api/js?key=${key}&libraries=places`;
      scriptElement.onload = resolve;
      document.body.appendChild(scriptElement);
    });
  }

}
