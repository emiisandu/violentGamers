import {Component, OnInit, ViewEncapsulation} from '@angular/core';
import {FormBuilder, Validators} from "@angular/forms";
import {Router} from "@angular/router";

@Component({
  selector: 'app-user-skills',
  templateUrl: './user-skills.component.html',
  styleUrls: ['./user-skills.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class UserSkillsComponent implements OnInit {

  selectedValue: String;
  personalSkill: String;

  constructor( private router:Router ) { }

  ngOnInit(): void {
  }


  // submits only the value from personalSkill to the Database
  submitPersonalSkill(){
    if(this.personalSkill.length > 0){
      this.router.navigate(['/UserProfile']);
    }
  }

  // submits all skills in the selected Value
  submitChosenSkills(){
    if(this.selectedValue.length >= 1){
      // send each skill in the list to the Database
      for(let skill in this.selectedValue){

      }
      this.router.navigate(['/UserProfile']);
    }
  }

}
