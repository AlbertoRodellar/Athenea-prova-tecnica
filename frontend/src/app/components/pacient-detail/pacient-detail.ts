import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { Pacient, PacientService } from '../../services/pacient.services';
import { ActivatedRoute, Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-pacient-detail',
  imports: [CommonModule, FormsModule],
  templateUrl: './pacient-detail.html',
  styleUrl: './pacient-detail.css',
})
export class PacientDetail implements OnInit {
  pacient?: Pacient;
  loading: boolean = true;

  constructor(
    private pacientService: PacientService,
    private route: ActivatedRoute,
    private cdr: ChangeDetectorRef,
    private router: Router
  ) {}

  ngOnInit(): void {
  this.route.paramMap.subscribe(params => {
    const pacientDni = params.get('dni');
    if (pacientDni) {
      this.loadPacient(pacientDni);
      }
    });
  }

  loadPacient(dni: string) {
    this.loading = true;
    this.pacientService.getPacientByDni(dni).subscribe({
      next: (data) => {
        console.log('Details:', data);
        this.pacient = data;
        this.loading = false;
        this.cdr.detectChanges();
      },
      error: () => {
        this.loading = false;
        this.pacient = undefined;
      }
    });
  }

  updatePacient() {
    if (this.pacient) {
      this.pacientService.updatePacient(this.pacient.dni, this.pacient).subscribe({
        next: (updated) => {
          this.pacient = updated;
          console.log('Pacient updated:', updated);
          alert('Pacient actualitzat correctament');

          this.router.navigate(['/']);
        },
        error: (err) => {
          console.error('Error actualitzant el pacient:', err);
          alert('Error actualitzant el pacient');
        }
      });
    }
  }
}
