import { Directive } from '@angular/core';
import { Validator, NG_VALIDATORS, ValidatorFn, FormControl } from '@angular/forms';

@Directive({
    selector: '[appYearvalidator]',
    providers: [
        {
            provide: NG_VALIDATORS,
            useClass: YearvalidatorDirective,
            multi: true
        }
    ]
})
export class YearvalidatorDirective implements Validator {

    validator: ValidatorFn;
    constructor() {
        this.validator = this.yearValidator();
    }

    validate(c: FormControl) {
        return this.validator(c);
    }

    yearValidator(): ValidatorFn {
        return (control: FormControl) => {
            if (control.value != null && control.value !== '') {
                if (control.value >= 1866 && control.value < (new Date()).getFullYear()) {
                    return null;
                } else {
                    return {
                        yearvalidator: { valid: false }
                    };
                }
            } else {
                return null;
            }
        };
    }
}