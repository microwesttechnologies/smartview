import { Component, inject, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ButtonComponent } from '../../component/form/button/button.component';
import { ModalComponent } from '../../component/modal/modal.component';
import { SharedModule } from '../../component/shared.module';

@Component({
  selector: 'app-persons',
  standalone: true,
  imports: [SharedModule, ButtonComponent, ModalComponent],
  templateUrl: './persons.component.html',
  styleUrls: ['./persons.component.scss'],
})
export class PersonsComponent implements OnInit {
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
