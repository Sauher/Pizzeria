import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Message } from '../interfaces/message';

@Injectable({
  providedIn: 'root'
})
export class MessageService {

  private messageSubject = new BehaviorSubject<Message | null>(null)

  message$ = this.messageSubject.asObservable();

  show(severity: Message['severity'], title: string, msg: string){
    this.messageSubject.next({severity,title,msg})
    setTimeout(() => this.hide(),3000);
  }
  private hide(){
    this.messageSubject.next(null)
  }
}
