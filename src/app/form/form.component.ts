import { Component, OnInit } from '@angular/core';
import { FormModel } from './model.ts/form-model';
import { DataService } from '../data.service';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {
  constructor(private dataService: DataService) { }
  countries = [];

  ngOnInit() {
    try {
      this.dataService.getCounties().subscribe((data: any) => {
        this.countries = data;
      })
    }
    catch (error) {
      console.log('Error in get counties API!', error)
    }
  }

  model = new FormModel(this.countries[0]);

  submitted = false;
  onSubmit(formData: object) {
    this.submitted = true;

    if (formData) {
      this.dataService.postData(formData)
        .subscribe(response => {
          console.log(response)
        }, error => {
          console.log({ error })
        })
    }
  }

  newForm() {
    this.model = new FormModel(this.countries[0]);
  }

  fileChange(event: any) {
    const filesList: FileList = event.target.files;
    console.log("fileChange() -> filesList", filesList);
  }
}
