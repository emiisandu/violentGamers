import { Component, OnInit } from '@angular/core';
import { faHome } from '@fortawesome/free-solid-svg-icons';
import { faSignOutAlt } from '@fortawesome/free-solid-svg-icons';
import { faUserEdit} from '@fortawesome/free-solid-svg-icons';
import {ActivatedRoute, Params} from '@angular/router';

@Component({
  selector: 'app-userprofile',
  templateUrl: './userprofile.component.html',
  styleUrls: ['./userprofile.component.css']
})
export class UserprofileComponent implements OnInit {

  constructor(private route: ActivatedRoute) { }

  faHome = faHome;
  faUserEdit = faUserEdit;
  faSignOut = faSignOutAlt;
  name: string;

  ngOnInit() {
    this.route.params.subscribe((params: Params) => this.name = params['name']);
  }

}
