export class FormModel {

    constructor(
        public country: string,
        public name?: string,
        public telefon?: number,
        public epost?: string,
        public pdfFiles?: string,
        public dob_year?: string,
        public dob_month?: string,
        public dob_day?: string,
        public gender?: string,
        public lastname?: string,
        public firstname?: string,
        public info?: string,
        public birthplace?: string,
        public coaddress?: string,
        public streetaddress?: string,
        public aptnumber?: string,
        public zipcode?: string,
        public city?: string,
        public estab?: string,
    ) { }

}