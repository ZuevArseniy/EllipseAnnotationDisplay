import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from "rxjs";
import { map } from "rxjs/operators";
import { Annotation } from '../annotation.model';

@Injectable({
  providedIn: 'root'
})
export class AnnotationsService {
  private annotationsUrl = 'https://dummyjson.com/http/200/[{"id":"a1","radiusX":20,"radiusY":25,"x":50,"y":60}]'; 
  
  constructor(private http: HttpClient) { }

  loadAnnotations(): Observable<Annotation[]> {
    return this.http.get<{ status: string; message: string }>(this.annotationsUrl)
        .pipe(map(response => JSON.parse(response.message)))
  }
}