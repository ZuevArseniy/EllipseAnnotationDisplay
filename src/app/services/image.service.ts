import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class ImageService {
    private imageUrl = 'https://image.dummyjson.com/512x512/101010'; 

    constructor(private http: HttpClient) { }

    loadImage(): Observable<Blob> {
        return this.http.get(this.imageUrl, { responseType: 'blob' });
    }
}