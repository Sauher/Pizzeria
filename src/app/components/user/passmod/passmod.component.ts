import { Component } from '@angular/core';
import { apires } from '../../../interfaces/response';
import { APIService } from '../../../services/api.service';


@Component({
  selector: 'app-passmod',
  standalone: true,
  imports: [],
  templateUrl: './passmod.component.html',
  styleUrl: './passmod.component.scss'
})
export class PassmodComponent {
   constructor(
    private api : APIService
   ){}
save(){}
}
