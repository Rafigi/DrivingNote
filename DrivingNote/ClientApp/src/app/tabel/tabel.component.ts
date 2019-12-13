import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import Cell from '../../Models/Cell';

@Component({
    selector: 'app-tabel',
    templateUrl: './tabel.component.html',
    styleUrls: ['./tabel.component.scss']
})
/** Tabel component*/
export class TabelComponent implements OnInit {
  //Variables 
  private TableArray: Cell[] = [];
  private id: number = 0;

  cellForm = new FormGroup({
    date: new FormControl(new Date().getDate, Validators.required),
    startAddress: new FormControl('', Validators.required),
    endAddress: new FormControl('', Validators.required),
    roundTrip: new FormControl(false, Validators.required),
    distance: new FormControl('', Validators.required)
  });


  ngOnInit() {
  }


  /** Table ctor */
  constructor() {
  }

  public addCell(): void {
    let newCell = new Cell(this.id,
      this.cellForm.get("date").value,
      this.cellForm.get("startAddress").value,
      this.cellForm.get("endAddress").value,
      this.cellForm.get("roundTrip").value,
      this.cellForm.get("distance").value
    );

    this.id++;
    this.TableArray.push(newCell);
    this.cellForm.reset();
  }

  public deleteCell(cell: Cell): void {
    let index = this.TableArray.indexOf(cell);
    if (index != -1) {
      //This is to remove the object in the right index.
      this.TableArray.splice(index, 1);
    }
  }
}
