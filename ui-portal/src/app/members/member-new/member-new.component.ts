import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MemberRequest } from 'src/app/_models/memberRequest';
import { SelectOption } from 'src/app/_models/selectOption';
import { CalculationService } from 'src/app/_services/calculation.service';
import { OccupationService } from 'src/app/_services/occupation.service';

@Component({
  selector: 'app-member-new',
  templateUrl: './member-new.component.html',
  styleUrls: ['./member-new.component.sass']
})
export class MemberNewComponent implements OnInit {

  occupations: SelectOption[]; 
  calculatedPremium: number = 0;
  formData: MemberRequest = new MemberRequest();
  oneForm = new FormGroup({
    name: new FormControl('', [Validators.required, Validators.minLength(3)]),
    dateOfBirth: new FormControl(''),
    occupationId: new FormControl(0, [Validators.required, Validators.min(1)]),
    deathSumInsured: new FormControl(0, [Validators.required, Validators.min(1)])
  });
  
  constructor(
    private occupationService: OccupationService,
    private calculationService: CalculationService
    ) { }

  ngOnInit() {
    this.occupationService.getAllOccupation().subscribe(occupationList => {
      this.occupations = occupationList;
    });

    this.oneForm.valueChanges.subscribe(x => {
      this.calculatePremimum();
    });
  }

  onDateChange() {
    this.formData.age = this.ageFromDateOfBirthday(this.formData.dateOfBirth);
  }

  public ageFromDateOfBirthday(dateOfBirth: any): number {
    const today = new Date();
    const birthDate = new Date(dateOfBirth);
    let age = today.getFullYear() - birthDate.getFullYear();
    const m = today.getMonth() - birthDate.getMonth();

    if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
      age--;
    }

    return age;
  }

  calculatePremimum(){
    if (this.oneForm.valid)
    {
      this.formData = this.oneForm.value;
      this.calculationService.calculatePremium(this.formData.occupationId, this.formData.deathSumInsured, this.formData.age)
        .subscribe(d => this.calculatedPremium = d);
    }
  }

  onChangeOccupation(item: SelectOption) {
    this.calculatePremimum();
  }

  /*resetErrorMessages() {
    this.errors.length = 0;
  }

  generateErrorMessages(formGroup: FormGroup) {
    Object.keys(formGroup.controls).forEach(controlName => {
      let control = formGroup.controls[controlName];
      let errors = control.errors;

      if (errors === null || errors.count === 0) {
        return;
      }
      // Handle the 'required' case
      if (errors.required) {
        this.errors.push(`${controlName} is required`);
      }
      // Handle 'minlength' case
      if (errors.minlength) {
        this.errors.push(`${controlName} minimum length is ${errors.minlength.requiredLength}.`);
      }
    });
  }*/

  onSubmit(){
    if(this.oneForm.valid){
      alert("Form Submitted");
    }
  }

}
