import {Injectable} from "@angular/core";
import {ActivatedRouteSnapshot, Resolve, Router, RouterStateSnapshot} from "@angular/router";
import {User} from "./shared/user.model";

@Injectable()
export class ShowlistResolver implements Resolve<any> {

  private userData: User

  constructor(private router: Router, private user: User) {
    this.userData = new User();
  }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): any {
    console.log('In Router')
   // this.userData.Email = route.params['email'];
    // this.userData.userId = route.params['id']
    // this.userData.userRole = route.params['role'];
    // this.userService.setUserData(this.userData);
    this.router.navigate(['/UserProfile', {outlets: {details: ['showDetails']}}]);
  }
}
