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

  oneForm = new FormGroup({
    name: new FormControl('', [Validators.required, Validators.minLength(3)]),
    age: new FormControl(0, [Validators.required, Validators.min(18)]),
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

  calculatePremimum(){
    if (this.oneForm.valid)
    {
      let formData : MemberRequest = this.oneForm.value;
      this.calculationService.calculatePremium(formData.occupationId, formData.deathSumInsured, formData.age)
        .subscribe(d => this.calculatedPremium = d);
    }
  }

  onChangeOccupation(item: SelectOption) {
    this.calculatePremimum();
  }

}
