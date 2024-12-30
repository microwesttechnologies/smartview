import { Component, Input } from '@angular/core';
import { SharedModule } from '../shared.module';
import { slideCustomAnimation } from '../../animations/global.animations';

@Component({
  selector: 'app-modal',
  standalone: true,
  imports: [SharedModule],
  templateUrl: './modal.component.html',
  animations: [
    slideCustomAnimation('slideEnterAndLeaveTop', 'Y', '-1rem', '0', {
      enter: '300ms',
      leave: '300ms',
    }),
  ],
})
export class ModalComponent {
  @Input() size: 'lg' | 'md' | 'sm' | 'xs' = 'lg';
  @Input() customStylesBody!: any;
}
