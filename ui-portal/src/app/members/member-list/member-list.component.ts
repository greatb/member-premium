import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-member-list',
  templateUrl: './member-list.component.html',
  styleUrls: ['./member-list.component.sass']
})
export class MemberListComponent implements OnInit {

  constructor(
    private router: Router
  ) { }

  ngOnInit() {
  }

  doAddMember(){
    this.router.navigate(['/members/new']);
  }

}
