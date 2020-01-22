import { Cell } from "./Cell";

export default class UserInfo {
  Name: string;
  LastName: string;
  Email: string;
  Sport: string;
  AccountNumber: string;
  HTMLTable: Cell[];

  constructor(name: string, lastname: string, email: string, sport: string, accountNumber: string, htmlTable: Cell[]) {
    this.Name = name;
    this.LastName = lastname;
    this.Email = email;
    this.Sport = sport;
    this.AccountNumber = accountNumber;
    this.HTMLTable = htmlTable;
  }
}
