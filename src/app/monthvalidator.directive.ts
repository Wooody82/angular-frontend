import { Directive } from '@angular/core';
import { Validator, NG_VALIDATORS, ValidatorFn, FormControl } from '@angular/forms';

@Directive({
    selector: '[appMonthvalidator]',
    providers: [
        {
            provide: NG_VALIDATORS,
            useClass: MonthvalidatorDirective,
            multi: true
        }
    ]
})
export class MonthvalidatorDirective implements Validator {

    validator: ValidatorFn;
    constructor() {
        this.validator = this.monthValidator();
    }

    validate(c: FormControl) {
        return this.validator(c);
    }

    monthValidator(): ValidatorFn {
        return (control: FormControl) => {
            if (control.value != null && control.value !== '') {
                if (control.value >= 1 && control.value <= 12) {
                    return null;
                } else {
                    return {
                        monthvalidator: { valid: false }
                    };
                }
            } else {
                return null;
            }
        };
    }
}