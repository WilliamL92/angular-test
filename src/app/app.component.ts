import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { environment } from './../environments/environment.development';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HttpClientModule],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = environment.title;
  apiData: any;

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    // Remplacez '/endpoint' par le chemin de votre API .NET
    this.http.get(`${environment.apiUrl}/api/users`).subscribe({
      next: (data) => {
        this.apiData = data;
        console.log('Données récupérées :', this.apiData);
      },
      error: (error) => {
        console.error('Erreur lors de la récupération des données');
      }
    });
  }
}
