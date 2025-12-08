import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface Pacient {
    dni: string;
    nom: string;
    cognoms: string;
    dataNaixement: string;
    poblacio: string;
    cip: string;
}

@Injectable({
    providedIn: 'root'
})

export class PacientService {
    private apiUrl = 'http://localhost:8000/api/pacients';

    constructor(private http: HttpClient) {}

    getPacients(): Observable<Pacient[]> {
        return this.http.get<Pacient[]>(this.apiUrl);
    }

    createPacient(pacient: Pacient): Observable<Pacient> {
        return this.http.post<Pacient>(this.apiUrl, pacient);
    }
}