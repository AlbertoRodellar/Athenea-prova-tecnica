import { Component, signal, OnInit } from '@angular/core';
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

  constructor(private pacientService: PacientService) {}

  ngOnInit(): void {
    this.loadPacients();
  }

  loadPacients(): void {
    this.pacientService.getPacients().subscribe((data: Pacient[]) => {
      this.pacients.set(data);
      console.log('Pacients loaded:', this.pacients);
    });
  }
  
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
          this.pacients.update(pacients => [...pacients, createdPacient]);
        },
        error: (error) => {
          console.error('Error creating pacient:', error);
        },
        complete: () => {
          this.resetForm();
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
