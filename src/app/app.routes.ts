import { Routes } from '@angular/router';
import { PizzalistComponent } from './components/system/pizzalist/pizzalist.component';
import { NotfoundComponent } from './components/system/notfound/notfound.component';
import { LoginComponent } from './components/user/login/login.component';
import { RegistrationComponent } from './components/user/registration/registration.component';
import { LostpassComponent } from './components/user/lostpass/lostpass.component';
import { LogoutComponent } from './components/user/logout/logout.component';

export const routes: Routes = [
    {path: "pizzalista", component: PizzalistComponent},
    {path: "login", component: LoginComponent},
    {path: "register", component: RegistrationComponent},
    {path: "lostpass", component: LostpassComponent},
    {path: "logout", component: LogoutComponent},
    {path: "", redirectTo: '/pizzalista', pathMatch: 'full'},
    {path: "**", component: NotfoundComponent}
];
