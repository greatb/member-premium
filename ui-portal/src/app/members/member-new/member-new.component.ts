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
    name: new FormControl('', [Validators.required, Validators.minLength(1)]),
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
      this.formData = this.oneForm.value;
      this.formData.age = this.ageFromDateOfBirthday(new Date(this.formData.dateOfBirth));
      this.calculatePremimum();
    });
  }

  public ageFromDateOfBirthday(dateOfBirth: any): number {
    const today = new Date();
    const birthDate = new Date(dateOfBirth);
    let age = today.getFullYear() - birthDate.getFullYear();
    const m = today.getMonth() - birthDate.getMonth();

    if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
      age--;
    }

    if (age > 0)
      return age;
    return 0;
  }

  calculatePremimum(){
    if (this.oneForm.valid)
    {
      this.formData = this.oneForm.value;
      this.calculationService.calculatePremium(this.formData.occupationId, this.formData.deathSumInsured, this.formData.age)
        .subscribe(d => this.calculatedPremium = d);
    }
  }

  onSubmit(){
    if(this.oneForm.valid){
      alert("Form Submitted");
    }
  }

}
