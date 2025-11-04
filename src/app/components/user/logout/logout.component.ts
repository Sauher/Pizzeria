import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../../services/auth.service';
import { Router } from '@angular/router';
import { MessageService } from '../../../services/message.service';

@Component({
  selector: 'app-logout',
  standalone: true,
  imports: [],
  templateUrl: './logout.component.html',
  styleUrl: './logout.component.scss'
})
export class LogoutComponent implements OnInit{
  constructor(
    private auth: AuthService,
    private router: Router,
    private msg: MessageService
  ){}

  ngOnInit(): void {
    this.auth.logout()
    this.msg.show('success', 'OK', 'Sikeres kijelentkezés')
    this.router.navigate(["/login"])
  }
}
