import {Component, OnInit, ViewChild} from '@angular/core';
import { faHome } from '@fortawesome/free-solid-svg-icons';
import { faSignOutAlt } from '@fortawesome/free-solid-svg-icons';
import { faUserEdit} from '@fortawesome/free-solid-svg-icons';
import {MatTableDataSource} from "@angular/material/table";
import {MatSort} from "@angular/material/sort";
import {ActivatedRoute,Params} from "@angular/router";


export interface PeriodicElement {
  name: string;
  level: number;
  experience: number;
  description: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {level: 1, name: 'Java', experience: 1.0079, description: 'desc'},
  {level: 2, name: 'C++', experience: 4.0026, description: 'desc'},
  {level: 2, name: 'MySQL', experience: 6.941, description: 'desc'},
  {level: 4, name: 'Python', experience: 10.811, description: 'desc'}
];



@Component({
  selector: 'app-userprofile',
  templateUrl: './userprofile.component.html',
  styleUrls: ['./userprofile.component.css']
})
export class UserprofileComponent implements OnInit {
  displayedColumns: string[] = ['level', 'name', 'experience', 'description'];
  dataSource = new MatTableDataSource(ELEMENT_DATA);

  constructor(private route: ActivatedRoute) { }

  faHome = faHome;
  faUserEdit = faUserEdit;
  faSignOut = faSignOutAlt;
  name: string;

  @ViewChild(MatSort) sort: MatSort;

  ngAfterViewInit() {
    this.dataSource.sort = this.sort;
  }
  ngOnInit() {
    this.route.params.subscribe((params: Params) => this.name = params['name']);
  }
}
