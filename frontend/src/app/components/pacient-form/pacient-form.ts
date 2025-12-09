import { Component, EventEmitter, Output, ChangeDetectorRef, ViewChild } from '@angular/core';
import { Pacient, PacientService } from '../../services/pacient.services';
import { FormsModule, NgForm } from '@angular/forms';

import { IonButton, IonList, IonItem, IonInput, IonDatetime, IonLabel } from '@ionic/angular/standalone';

@Component({
  selector: 'app-pacient-form',
  imports: [ FormsModule, IonButton, IonList, IonItem, IonInput, IonDatetime, IonLabel],
  templateUrl: './pacient-form.html',
  styleUrls: ['./pacient-form.css']
})
export class PacientForm {
  newPacient: Pacient = {
    dni: '',
    nom: '',
    cognoms: '',
    dataNaixement: '',
    poblacio: '',
    cip: ''
  };
  @ViewChild('addForm') addForm!: NgForm;
  
  @Output() pacientCreated = new EventEmitter<Pacient>();
  @Output() pacientCreateError = new EventEmitter<string>();

  constructor(private pacientService: PacientService, private cdr: ChangeDetectorRef) {}

  addPacient() {
    const pacienteToSend = {
      ...this.newPacient,
      dataNaixement: this.newPacient.dataNaixement.substring(0, 10)
    };

    this.pacientService.createPacient(pacienteToSend).subscribe({
      next: (createdPacient) => {
        this.pacientCreated.emit(createdPacient);
        this.resetForm();
        this.cdr.detectChanges();
      },
      error: (error) => {
        console.error('Error creating pacient:', error);
        this.pacientCreateError.emit('Error creant el pacient.');
        this.cdr.detectChanges();
      }
    });
  }

  resetForm() {
    this.newPacient = {
      dni: '',
      nom: '',
      cognoms: '',
      dataNaixement: '',
      poblacio: '',
      cip: ''
    };
    if (this.addForm) {
      this.addForm.resetForm();
    }
  }
}
