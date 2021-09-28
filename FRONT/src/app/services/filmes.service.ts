
import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { Filme } from "../models/Filme";

@Injectable({
  providedIn: 'root'
})
export class FilmesService {
  private baseUrl = "http://localhost:5000/api/filme";

  constructor(private http: HttpClient) { }

  list(): Observable<Filme[]> {
    return this.http.get<Filme[]>(`${this.baseUrl}/list`);
  }

  create(filme : Filme): Observable<Filme> {
    return this.http.post<Filme>(`${this.baseUrl}/create`, filme);
  }

}
