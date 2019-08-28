import { Injectable } from "@angular/core";
import {
  Resolve,
  Router,
  RouterStateSnapshot,
  ActivatedRouteSnapshot
} from "@angular/router";
import { User } from "../_models/user";
import { UserService } from "../_services/user.service";
import { Observable, of } from "rxjs";
import { catchError } from "rxjs/operators";
import { AuthService } from "../_services/auth.service";

@Injectable()
export class MemberEditResolver implements Resolve<User> {
  constructor(
    private userSerive: UserService,
    private router: Router,
    private authService: AuthService
  ) {}

  resolve(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): User | Observable<User> | Promise<User> {
    return this.userSerive.getUser(this.authService.decodedToken.nameid).pipe(
      catchError(error => {
        this.router.navigate(["/members"]);
        console.log("error in fetching the data");
        return of(null);
      })
    );
  }
}
