import { Component, Input, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MessageService } from '../../../services/message.service';
import { Message } from '../../../interfaces/message';


@Component({
  selector: 'app-message',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './message.component.html',
  styleUrl: './message.component.scss'
})
export class MessageComponent implements OnInit{
  message: Message | null = null

  constructor(private messageService : MessageService){}

   


  ngOnInit(): void {
    this.messageService.message$.subscribe(res => {
      this.message = res
      switch(this.message?.severity){
        case 'info': this.message.icon = "bi bi-info-circle-fill"
        break;
        case 'danger': this.message.icon = "bi bi-exclamation-square-fill"
        break;
        case 'success': this.message.icon = "bi bi-check-square-fill"
        break;
        case 'warning': this.message.icon = "bi bi-exclamation-square-fill"
        break;
      }
    })


    
  }
}
