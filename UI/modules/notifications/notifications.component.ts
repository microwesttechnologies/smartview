import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';
import { SharedModule } from '../../component/shared.module';
import { ButtonComponent } from '../../component/form/button/button.component';
import { ModalComponent } from '../../component/modal/modal.component';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';



@Component({
  selector: 'app-notifications',
  standalone: true,
  imports: [SharedModule, ButtonComponent, ModalComponent],
  templateUrl: './notifications.component.html',
  styleUrl: './notifications.component.scss'
})
export class NotificationsComponent {
createPersonForm: FormGroup;
  
    constructor(private fb: FormBuilder) {
      this.createPersonForm = this.fb.group({
        name: ['', Validators.required],
        phone: ['', [Validators.required, Validators.pattern(/^\d{10}$/)]],
        role: ['', Validators.required],
        zone: ['', Validators.required],
      });
    }
  
    ngOnInit(): void {
         
    }
  
    private readonly router: Router = inject(Router);
  
    public closeModal(): void {
      this.router.navigateByUrl('/dashboard');
    }
  
    get formControls() {
      return this.createPersonForm.controls;
    }
}
