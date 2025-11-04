import { Component, Input } from '@angular/core';
import { NavItem } from '../../../interfaces/navItem';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule,RouterModule],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss'
})
export class NavbarComponent {
@Input() title = ''

menuItems:NavItem[] = []
ngOnInit(): void{
this.setupMenu()
}
setupMenu(){
this.menuItems = [{
  name:'Pizzalista',
  url:"/pizzalista",
  icon: 'bi-card-list'
},
{
  name:'Regisztráció',
  url:"/register",
  icon: 'bi-person-add'
},
{
  name:'Belépés',
  url:"/login",
  icon: 'bi-box-arrow-in-right'
}]
}
}
