import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { APIService } from '../../../services/api.service';
import { FormsModule } from '@angular/forms';
import { MessageService } from '../../../services/message.service';
import { User } from '../../../interfaces/user';
import { AuthService } from '../../../services/auth.service';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [RouterModule, FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {

  user : User = {
    name: '',
    email: '',
    password: '',
    id: 0,
    confirm: '',
    role: ''
  }
  constructor(
    private api: APIService,
    private msg: MessageService,
    private auth: AuthService
  ){}
login() {
  this.api.Login('users',this.user).then(res=> {
    if(res.status == 500){
      this.msg.show('danger', 'Hiba', res.message)
      return
    }
    this.auth.login(JSON.stringify(res.data))
    this.msg.show('success', 'Ok', res.message)
  })
}

}
