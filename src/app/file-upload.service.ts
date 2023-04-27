import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FileUploadService {
  // API URL
  private baseUrl = 'https://file.io';

  constructor(private http: HttpClient) {}

  // Returns an Observable
  public upload(file: any): Observable<any> {
    // Create FormData
    const formData = new FormData();
    // Store form name as "file" with file data
    formData.append('file', file, file.name);
    // Send HTTP post request with form data
    return this.http.post(this.baseUrl, formData);
  }
}

