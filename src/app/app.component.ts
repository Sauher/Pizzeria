import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './components/system/header/header.component';
import { NavbarComponent } from './components/system/navbar/navbar.component';
import { FooterComponent } from './components/system/footer/footer.component';
import { MessageComponent } from './components/system/message/message.component';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,MessageComponent,HeaderComponent,NavbarComponent,FooterComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  appTitle = 'Pizzeria';
  subtitle = 'A legjobb pizza nálunk van twin'
  company = "Bajai SZC Türr István Technikum"
  author = '13.A Schauer Olivér'
}
