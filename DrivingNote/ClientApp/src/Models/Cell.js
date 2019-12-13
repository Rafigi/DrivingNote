"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Cell = /** @class */ (function () {
    function Cell(id, date, StartAddress, EndAddress, roundTrip, distance) {
        this.id = id;
        this.Date = date;
        this.StartAddress = StartAddress;
        this.EndAddress = EndAddress;
        this.RoundTrip = roundTrip;
        this.Distance = distance;
    }
    return Cell;
}());
exports.default = Cell;
//# sourceMappingURL=Cell.js.map