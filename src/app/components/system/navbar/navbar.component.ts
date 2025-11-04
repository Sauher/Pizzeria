import { Component, Input } from '@angular/core';
import { NavItem } from '../../../interfaces/navItem';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { AuthService } from '../../../services/auth.service';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule,RouterModule],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss'
})
export class NavbarComponent {
@Input() title = ''
isLoggedIn = false
loggedUserName = ''

constructor(
  private auth: AuthService
){}

menuItems:NavItem[] = []
ngOnInit(): void{
this.auth.isLoggedIn$.subscribe(res=>{
  this.isLoggedIn = res
  if(this.isLoggedIn){
    this.loggedUserName
  }
})

}
setupMenu(isLockedin : boolean){
this.menuItems = [{
  name:'Pizzalista',
  url:"/pizzalista",
  icon: 'bi-card-list'
},
...(isLockedin) ? [{
  name:'Kilépés',
  url:"/logout",
  icon: 'bi-person-add'
},
] : [{
  name:'Regisztráció',
  url:"/register",
  icon: 'bi-person-add'
},
{
  name:'Belépés',
  url:"/login",
  icon: 'bi-box-arrow-in-right'
}]
]
}
}
