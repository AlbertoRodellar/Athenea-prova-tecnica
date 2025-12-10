import { Component, signal, OnInit, ChangeDetectorRef } from '@angular/core';
import { RouterLink } from '@angular/router';
import { PacientService, Pacient } from '../../services/pacient.services';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { PacientForm } from '../pacient-form/pacient-form';
import { IonToast, IonList, IonItem, IonCol, IonGrid, IonRow } from '@ionic/angular/standalone';

@Component({
  selector: 'app-pacient-list',
  imports: [RouterLink, CommonModule, FormsModule, PacientForm, IonToast, IonList, IonItem, IonGrid, IonRow, IonCol],
  templateUrl: './pacient-list.html',
  styleUrl: './pacient-list.css',
})
export class PacientList implements OnInit {
  pacients = signal<Pacient[]>([]);
  loading: boolean = true;

  

  constructor(private pacientService: PacientService, private cdr: ChangeDetectorRef, private router: Router) {}

  ngOnInit(): void {
    this.loadPacients();
  }

  loadPacients(): void {
    this.pacientService.getPacients().subscribe((data: Pacient[]) => {
      this.pacients.set(data);
      console.log('Pacients loaded:', this.pacients);
      this.loading = false;
      this.cdr.detectChanges();
    });
  }

  goToPacient(dni: string) {
    this.router.navigate(['/pacients', dni]);
  }
  
  toastMessage = signal<string>('');
  isToastOpen = false;

  setOpen(isOpen: boolean) {
    this.isToastOpen = isOpen;
  }
  
  onPacientCreated(newPacient: Pacient): void {
    this.pacients.update(pacients => [...pacients, newPacient]);
    this.toastMessage.set('Pacient amb DNI: ' + newPacient.dni + ' creat correctament!');
    this.setOpen(true);
    this.cdr.detectChanges();
  }

  onPacientCreateError(errorMessage: string): void {
    this.toastMessage.set(errorMessage);
    this.setOpen(true);
    this.cdr.detectChanges();
  }
}
