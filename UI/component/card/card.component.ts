import { Component, Input, Output, EventEmitter, inject } from '@angular/core';
import { Router } from '@angular/router';

const modalMap: Record<string, number> = {
  persons: 1,
  zones: 2,
  notifications: 3,
};

@Component({
  selector: 'app-card',
  standalone: true,
  imports: [],
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})

export class CardComponent {
  @Input()  imageCard!: string;
  @Input()  titleCard!: string;
  @Input()  descriptionCard!: string;
  @Input()  routeCard!: string;
  @Output() numberModal = new EventEmitter<number>();
  @Input()  actionType!: string;
  
  
  private readonly router: Router = inject(Router);

  onButtonClick() {
    
    let modalValue = 0;
    console.log(this.routeCard)
    if (this.routeCard === 'persons') {
      modalValue = 1;
      this.numberModal.emit(modalValue);
    } 
    else if (this.routeCard === 'zones') {
      modalValue = 2;
      this.numberModal.emit(modalValue);
    } 
    else if (this.routeCard === 'notifications') {
      modalValue = 3;
      this.numberModal.emit(modalValue);
    } 
    
    else {
      this.router.navigateByUrl(this.routeCard);
      
    }
    }
  
}