import { Component } from '@angular/core';
import { apires } from '../../../interfaces/response';
import { APIService } from '../../../services/api.service';


@Component({
  selector: 'app-lostpass',
  standalone: true,
  imports: [],
  templateUrl: './lostpass.component.html',
  styleUrl: './lostpass.component.scss'
})
export class LostpassComponent {
   constructor(
    private api: APIService
   ){}
recoverpass(){}
}
