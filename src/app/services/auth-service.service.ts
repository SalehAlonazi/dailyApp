import { Injectable } from '@angular/core';
import {
  Auth,
  signInWithEmailAndPassword,
  authState,
  createUserWithEmailAndPassword,
  UserCredential,
} from '@angular/fire/auth';
import { from, Observable, } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  currentUser$ = authState(this.auth);

  constructor(private auth: Auth) { }

  getUserID(a: Observable<any>) {
    this.auth.onAuthStateChanged((user) => {
      if (user) {
        // User logged in already or has just logged in.
        return console.log(user.uid);
      }
    });
  }
  signUp(email: string, password: string): Observable<UserCredential> {
    return from(createUserWithEmailAndPassword(this.auth, email, password));
  }

  login(email: string, password: string): Observable<any> {
    return from(signInWithEmailAndPassword(this.auth, email, password));
  }


  logout(): Observable<any> {
    return from(this.auth.signOut());
  }
}