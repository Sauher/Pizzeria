import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { enviroment } from '../../enviroment';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private TokenName = enviroment.tokenname
  constructor() { }

  private isLoggedIn  = new BehaviorSubject<boolean>(this.hasToken())  
  
    isLoggedIn$ = this.isLoggedIn.asObservable();

    hasToken():boolean{
      return !!sessionStorage.getItem(this.TokenName)
    }

    login(token:string){ //TODO TOKEN STRING LESZ AMINT LESZ JWT
      sessionStorage.setItem(this.TokenName, token)
      this.isLoggedIn.next(true)
    }
    logout(){
      sessionStorage.removeItem(this.TokenName)
      this.isLoggedIn.next(false)
    }
    loggedUser(){
      const token  = sessionStorage.getItem(this.TokenName)
      if(token){
        return JSON.parse(token)
      }
      return null
    }
    isAdmin(): boolean{
      const user = this.loggedUser()
      return user.role === "admin"
    }
    isLoggedUser(): boolean{
      return this.isLoggedIn.value
    }
}
