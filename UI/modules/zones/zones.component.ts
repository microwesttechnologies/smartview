import { CommonModule } from '@angular/common';
import { Component, inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { SharedModule } from '../../component/shared.module';
import { ButtonComponent } from '../../component/form/button/button.component';
import { ModalComponent } from '../../component/modal/modal.component';

@Component({
  selector: 'app-zones',
  standalone: true,
  imports: [SharedModule, ButtonComponent, ModalComponent],
  templateUrl: './zones.component.html',
  styleUrl: './zones.component.scss'
})
export class ZonesComponent implements OnInit {
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
