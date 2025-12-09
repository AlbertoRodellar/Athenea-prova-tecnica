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

    getPacientByDni(dni: string): Observable<Pacient> {
        const url = `${this.apiUrl}/${dni}`;
        return this.http.get<Pacient>(url);
    }

    createPacient(pacient: Pacient): Observable<Pacient> {
        return this.http.post<Pacient>(this.apiUrl, pacient);
    }

    updatePacient(dni: string, pacient: Pacient): Observable<Pacient> {
        const url = `${this.apiUrl}/${dni}`;
        return this.http.put<Pacient>(url, pacient);
    }

    // deletePacient(dni: string): Observable<void> {
    //     const url = `${this.apiUrl}/${dni}`;
    //     return this.http.delete<void>(url);
    // }
}