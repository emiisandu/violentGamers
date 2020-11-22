import { Component, OnInit } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {FormControl, Validators} from '@angular/forms';

interface Category {
  value: string;
  viewValue: string;

}

interface Experience {
  name: string;
  display: string;
}

interface CategoryGroup {
  disabled?: boolean;
  name: string;
  selected?: string;
  category: Category[];
}

@Component({
  selector: 'app-user-skills',
  templateUrl: './user-skills.component.html',
  styleUrls: ['./user-skills.component.css']
})
export class UserSkillsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  selected = 'other';
  categoryControl = new FormControl();
  categoryGroups: CategoryGroup[] = [
    {
      name: 'Programming Language',
      category: [
        {value: 'c#-0', viewValue: 'C#'},
        {value: 'java-1', viewValue: 'Java'},
        {value: 'python-2', viewValue: 'Python'}
      ]
    },
    {
      name: 'Social Skills',
      category: [
        {value: 'goodcoffee-3', viewValue: 'Make good Coffee'},
        {value: 'funatparties-4', viewValue: 'Fun at parties'},
        {value: 'goodwithcats-5', viewValue: 'Good with cats'}
      ]
    }

  ];
  experienceControl = new FormControl('', Validators.required);
  selectFormControl = new FormControl('', Validators.required);
  experience: Experience[] = [
    {name: 'Intern', display: 'Intern'},
    {name: 'Beginner', display: 'Beginner'},
    {name: 'No experience', display: 'Noob'},
  ];

}
