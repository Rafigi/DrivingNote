import { Cell } from "./Cell";

export default class UserInformation {
  Name: string;
  LastName: string;
  Email: string;
  Sport: string;
  AccountNumber: string;
  TableInfomation: Cell[];

  constructor(name: string, lastname: string, email: string, sport: string, accountNumber: string, tableInfomation: Cell[]) {
    this.Name = name;
    this.LastName = lastname;
    this.Email = email;
    this.Sport = sport;
    this.AccountNumber = accountNumber;
    this.TableInfomation = tableInfomation;
  }
}
