import { Component, OnInit } from '@angular/core';
import { SelectOption } from 'src/app/_models/selectOption';
import { OccupationService } from 'src/app/_services/occupation.service';

@Component({
  selector: 'app-member-new',
  templateUrl: './member-new.component.html',
  styleUrls: ['./member-new.component.sass']
})
export class MemberNewComponent implements OnInit {

  occupations: SelectOption[]; 
  
  constructor(private occupationService: OccupationService) { }

  ngOnInit() {
    this.occupationService.getAllOccupation().subscribe(occupationList => {
      this.occupations = occupationList;
    });
  }

}
