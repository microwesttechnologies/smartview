import { Component, inject, OnInit } from '@angular/core';
import { ItemCardModel } from '../models/itemscards.model';
import { CardComponent } from '../../component/card/card.component';
import { CommonModule } from '@angular/common';



@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [CardComponent, CommonModule],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss'
})


export class DashboardComponent implements OnInit {
itemCards!: ItemCardModel [];

ngOnInit(): void {
  this.itemCards = [
    {
      title: 'Configuracion',
      description: 'En este modulo podras parametrizar tu aplicacion',
      image: '../../assets/img/setting.jpg',
      route: 'configuration',
    },
    {
      title: 'Monitoreo',
      description: 'En este modulo encontraras la configuracion de personas y zonas',
      image: '../../assets/img/monitoring.jpg',
      route: 'monitoring',
    },
    {
      title: 'Historial de notificaciones',
      description: 'En este modulo podras visualizar el historial de notificaciones',
      image: '../../assets/img/notification.jpg',
      route: 'historial-notifications',
    },
  ];
}
}
