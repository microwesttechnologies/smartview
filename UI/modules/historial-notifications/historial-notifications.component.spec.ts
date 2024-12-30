import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HistorialNotificationsComponent } from './historial-notifications.component';

describe('HistorialNotificationsComponent', () => {
  let component: HistorialNotificationsComponent;
  let fixture: ComponentFixture<HistorialNotificationsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HistorialNotificationsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(HistorialNotificationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
