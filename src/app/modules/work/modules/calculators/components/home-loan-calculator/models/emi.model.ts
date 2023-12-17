export class Emi {

    paymentNo: number;
    openingBalance: number;
    emi: number;
    principle: number;
    interest: number;
    closingBalance: number;

    constructor() {
        this.paymentNo = 1;
        this.openingBalance = 0;
        this.emi = 0;
        this.principle = 0;
        this.interest = 0;
        this.closingBalance = 0;
    }
}
