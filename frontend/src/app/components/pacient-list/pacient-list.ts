import { Component, signal, OnInit, ChangeDetectorRef } from '@angular/core';
import { RouterLink } from '@angular/router';
import { PacientService, Pacient } from '../../services/pacient.services';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';


@Component({
  selector: 'app-pacient-list',
  imports: [RouterLink, CommonModule, FormsModule],
  templateUrl: './pacient-list.html',
  styleUrl: './pacient-list.css',
})
export class PacientList implements OnInit {
  pacients = signal<Pacient[]>([]);
  loading: boolean = true;

  constructor(private pacientService: PacientService, private cdr: ChangeDetectorRef) {}

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
  
  formMessage: string = '';
  newPacient: Pacient = {
      dni: '',
      nom: '',
      cognoms: '',
      dataNaixement: '',
      poblacio: '',
      cip: ''
    };

    addPacient(): void {
      this.pacientService.createPacient(this.newPacient as Pacient).subscribe({
        next: (createdPacient: Pacient) => {
          console.log('Pacient created:', createdPacient);
          this.formMessage = 'Pacient amb DNI: ' + createdPacient.dni + ' creat correctament!';
          this.pacients.update(pacients => [...pacients, createdPacient]);
          this.resetForm();
          this.cdr.detectChanges();
        },
        error: (error) => {
          this.formMessage = 'Error creant el pacient.';
          console.error('Error creating pacient:', error);
          this.cdr.detectChanges();
        }
    })
  }

  resetForm(): void {
    this.newPacient = {
      dni: '',
      nom: '',
      cognoms: '',
      dataNaixement: '',
      poblacio: '',
      cip: ''
    };
  }
}
