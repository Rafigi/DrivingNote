import { Component, OnInit, ElementRef, ViewChild, AfterViewInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import * as jspdf from 'jspdf';

import html2canvas from 'html2canvas';
import { Cell } from '../../Models/Cell';
declare var google; //Need to declare google, so the script will work.

@Component({
  selector: 'app-tabel',
  templateUrl: './tabel.component.html',
  styleUrls: ['./tabel.component.scss']
})
/** Tabel component*/
export class TabelComponent implements OnInit, AfterViewInit {
  ngAfterViewInit(): void {

  }
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

  @ViewChild('data')
  data: ElementRef;

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

  /** Table ctor */
  constructor() {

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



  GenerateTheTableInPDF() {
    var elementHandler = {
      '#ignorePDF': function (element, renderer) {
        return true;
      }
    };
    var data = this.data.nativeElement;
    //var data = document.getElementById('contentToConvert');
    html2canvas(data).then(canvas => {
      // Few necessary setting options  
      var imgWidth = 208;
      var pageHeight = 295;
      var imgHeight = canvas.height * imgWidth / canvas.width;
      var heightLeft = imgHeight;

      const contentDataURL = canvas.toDataURL('image/png')
      let pdf = new jspdf('p', 'mm', 'a4'); // A4 size page of PDF  
      var position = 10;
      pdf.addImage(contentDataURL, 'PNG', 0, position, imgWidth, imgHeight)
      pdf.save('DrivingNote.pdf'); // Generated PDF
    });

    //console.log(source);
    //doc.fromHTML(
    //  source,
    //  15,
    //  15,
    //  {
    //    'width': 20, 'elementHandlers': elementHandler
    //  });

    //doc.output("dataurlnewwindow");
  }

  public addCell(): void {

    if (!this.cellForm.invalid) {
      let newCell: Cell = {
        id: this.id,
        Date: this.cellForm.get("date").value,
        StartAddress: this.startAddressResult[0],
        EndAddress: this.endAddressResult[0],
        RoundTrip: this._roundTrip,
        Distance: this.distanceResult
      }
      this.Cells.push(newCell);
      this.id++;
      this.clearForms();
    }
  }


  public deleteCell(cell: Cell): void {
    let index = this.Cells.indexOf(cell);
    if (index != -1) {
      //This is to remove the object in the right index.
      this.Cells.splice(index, 1);
    }
  }

  //The actually clear for reactive forms will not clear.
  private clearForms() {
    this.cellForm.get("date").setValue(this.CreateDateOfToday());
    this.cellForm.get("startAddress").reset();
    this.cellForm.get("endAddress").reset();
    this._roundTrip = false;
    this.cellForm.get("distance").setValue('');
  }

  //getters for the forms
  get getStartAddress() { return this.cellForm.get('startAddress'); }
  get getEndAddress() { return this.cellForm.get('endAddress'); }

  //For Creating a script outside of the index.html file. 
  private CreateGoogleAutoScript() {
    let key = 'AIzaSyBM4dBYGewehvlFZyudquC5fQnPmxoblhc';
    return new Promise(resolve => {
      const scriptElement = document.createElement('script');
      scriptElement.src = `https://maps.googleapis.com/maps/api/js?key=${key}&libraries=places`;
      scriptElement.onload = resolve;
      document.body.appendChild(scriptElement);
    });
  }

}
