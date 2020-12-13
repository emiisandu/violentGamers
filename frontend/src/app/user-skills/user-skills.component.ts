import {Component, OnInit, ViewEncapsulation} from '@angular/core';
import {FormBuilder, Validators} from "@angular/forms";

@Component({
  selector: 'app-user-skills',
  templateUrl: './user-skills.component.html',
  styleUrls: ['./user-skills.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class UserSkillsComponent implements OnInit {

  selectedValue: String;
  personalSkill: String;

  constructor( ) { }

  ngOnInit(): void {
  }



}
