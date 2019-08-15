import {Component, OnInit} from '@angular/core';
import {FirebaseUISignInFailure, FirebaseUISignInSuccessWithAuthResult} from "firebaseui-angular";
import {Router} from "@angular/router";

@Component({
    selector: 'app-sign-in',
    templateUrl: './sign-in.page.html',
    styleUrls: ['./sign-in.page.scss'],
})
export class SignInPage implements OnInit {

    constructor(private router: Router) {
    }

    ngOnInit() {
    }

    signInSuccessCallback($event: FirebaseUISignInSuccessWithAuthResult) {
      this.router.navigateByUrl('/tabs/tab1');
    }

    signInErrorCallback($event: FirebaseUISignInFailure) {

    }
}
