import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ItemCardModel } from '../models/itemscards.model';
import { CardComponent } from '../../component/card/card.component';
import { ZonesComponent } from '../zones/zones.component';
import { slideCustomAnimation } from '../../app/animations/global.animations';
import { PersonsComponent } from "../persons/persons.component";
import { NotificationsComponent } from '../notifications/notifications.component';

@Component({
  selector: 'app-configuration',
  standalone: true,
  imports: [CardComponent, CommonModule, ZonesComponent, NotificationsComponent, PersonsComponent],
  templateUrl: './configuration.component.html',
  styleUrls: ['./configuration.component.scss'],
  animations: [
    slideCustomAnimation('slideEnterDown', 'Y', '1rem', '0', {
      enter: '300ms',
    }),
    slideCustomAnimation('slideEnterLeft', 'X', '-1rem', '0', {
      enter: '300ms',
    }),
  ],
})
export class ConfigurationComponent implements OnInit {
  itemCards!: ItemCardModel[];
  showFormPersons = false;
  showFormZones = false;
  showFormNotification = false;
  _showmodal: number = 0;

  ngOnInit(): void {
    this.itemCards = [
      {
        title: 'Personas',
        description: 'En este módulo podrás crear personas',
        image: '../../assets/img/persons.jpg',
        route: 'persons',
      },
      {
        title: 'Zonas',
        description: 'En este módulo podrás crear zonas',
        image: '../../assets/img/zone.jpg',
        route: 'zones',
      },
      {
        title: 'Notificaciones',
        description: 'En este módulo podrás visualizar las notificaciones',
        image: '../../assets/img/notifications-2.jpg',
        route: 'notifications',
      }
    ];
  }

  showmodal(modalValue: number): void {
    this._showmodal = modalValue;
    this.onModalChange(modalValue);
  }

  onModalChange(modalValue: number): void {
    this.showFormPersons = modalValue === 1;
    this.showFormZones = modalValue === 2;
    this.showFormNotification = modalValue === 3;
  }
}