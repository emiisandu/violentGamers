import { Component, OnInit } from '@angular/core';
import {TestRestService} from '../service/test-rest.service';
import {User} from '../model/user';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {

  ceva: string;

  constructor(private testService: TestRestService) { }

  ngOnInit(): void {
  }

  register(): void {
    const user: User = new User();
    user.id = 1;

    this.testService.callTestPost(user).subscribe((response: string) => {
        console.log(response);
    });
  }

}
