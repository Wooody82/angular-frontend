import { Directive, Input } from '@angular/core';
import { Validator, NG_VALIDATORS, ValidatorFn, FormControl } from '@angular/forms';

@Directive({
    selector: '[appDayvalidator]',
    providers: [
        {
            provide: NG_VALIDATORS,
            useClass: DayvalidatorDirective,
            multi: true
        }
    ]
})
export class DayvalidatorDirective implements Validator {

    validator: ValidatorFn;
    constructor() {
        this.validator = this.dayValidator();
    }

    validate(c: FormControl) {
        return this.validator(c);
    }

    dayValidator(): ValidatorFn {
        return (control: FormControl) => {
            //console.log("Year ", control.parent.value.year);

            if (control.value != null && control.value !== '') {
                var monthValue = control.parent.value.dob_month
                var yearValue = control.parent.value.dob_year

                if (control.value > 31 || control.value < 1) {
                    return {
                        dayvalidator: { valid: false }
                    };
                } else if ((monthValue == 4 || monthValue == 6 || monthValue == 9 || monthValue == 11) && control.value == 31) {
                    return {
                        dayvalidator: { valid: false }
                    };
                } else if (monthValue == 2) {
                    var isleap = ((yearValue % 4 == 0) && (yearValue % 100 != 0)) || (yearValue % 400 == 0);
                    if (control.value > 29) {
                        return {
                            dayvalidator: { valid: false }
                        };
                    } else if (control.value == 29 && !isleap) {
                        return {
                            dayvalidator: { valid: false }
                        };
                    } else {
                        return null;
                    }
                }
                else {
                    return null
                }
            } else {
                return null;
            }
        };
    }
}