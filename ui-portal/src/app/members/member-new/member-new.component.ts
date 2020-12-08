import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { SelectOption } from 'src/app/_models/selectOption';
import { OccupationService } from 'src/app/_services/occupation.service';

@Component({
  selector: 'app-member-new',
  templateUrl: './member-new.component.html',
  styleUrls: ['./member-new.component.sass']
})
export class MemberNewComponent implements OnInit {

  occupations: SelectOption[]; 

  oneForm = new FormGroup({
    name: new FormControl('', [Validators.required, Validators.minLength(3)]),
    age: new FormControl(0, [Validators.required, Validators.min(18)]),
    dateOfBirth: new FormControl(''),
    occupationId: new FormControl(0, [Validators.required, Validators.min(1)]),
    deathSumInsured: new FormControl(0, [Validators.required, Validators.min(1)])
  });
  
  constructor(private occupationService: OccupationService) { }

  ngOnInit() {
    this.occupationService.getAllOccupation().subscribe(occupationList => {
      this.occupations = occupationList;
    });
  }

  onChangeOccupation(item: SelectOption) {

  }

}
