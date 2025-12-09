import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

import { IonHeader, IonTitle, IonToolbar, IonFooter, IonContent } from '@ionic/angular/standalone';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, IonHeader, IonTitle, IonToolbar, IonFooter, IonContent],
  templateUrl: './app.html',
})
export class App {}

