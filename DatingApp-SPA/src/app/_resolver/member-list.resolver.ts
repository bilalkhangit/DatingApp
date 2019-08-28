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

@Injectable()
export class MemberListResolver implements Resolve<User[]> {
  constructor(private userSerive: UserService, private router: Router) {}

  resolve(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): User[] | Observable<User[]> | Promise<User[]> {
    return this.userSerive.getUsers().pipe(
      catchError(error => {
        this.router.navigate(["/home"]);
        console.log("error in fetching the data");
        return of(null);
      })
    );
  }
}
