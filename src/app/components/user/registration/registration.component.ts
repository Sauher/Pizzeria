import { Component } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { APIService } from '../../../services/api.service';
import { User } from '../../../interfaces/user';
import { FormsModule} from '@angular/forms'
import { MessageService } from '../../../services/message.service';

@Component({
  selector: 'app-registration',
  standalone: true,
  imports: [RouterModule, FormsModule],
  templateUrl: './registration.component.html',
  styleUrl: './registration.component.scss'
})
export class RegistrationComponent {
  acceptTerms: boolean = false;
  newUser: User = {
    id: 0,
    name: '',
    email: '',
    password: '',
    confirm: '',
    role: 'user'
  }

  constructor(
    private api: APIService,
    private msg: MessageService,
    private router: Router
  ){}

register() {
  if(!this.acceptTerms){
    this.msg.show("danger","HIBA","El kell fogadnod a szabályzatot")
    return
  }
  this.api.Registration('users',this.newUser).then(res=>{
      if(res.status == 500){
        this.msg.show('danger', 'Hiba', res.message)
        return
      }
      this.msg.show('success', 'Ok', res.message)
      this.newUser = {
        id: 0,
        name: '',
        email: '',
        password: '',
        confirm: '',
        role: 'user'
      }
      this.router.navigate(['/login'])
  })

}

}
