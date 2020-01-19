export default class UserInfo {
  Name: string;
  LastName: string;
  Email: string;
  Sport: string;
  AccountNumber: string;
  HTMLTable: string;

  constructor(name: string, lastname: string, email: string, sport: string, accountNumber: string, htmlTable: string) {
    this.Name = name;
    this.LastName = lastname;
    this.Email = email;
    this.Sport = sport;
    this.AccountNumber = accountNumber;
    this.HTMLTable = htmlTable;
  }
}
