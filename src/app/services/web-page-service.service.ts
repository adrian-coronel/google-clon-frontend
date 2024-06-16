import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { WebPage } from '../models/web-page.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class WebPageService {
  private URL_API = `http://localhost:8080/api`

  constructor(private http: HttpClient) { }

  searchWebPages(query: string): Observable<WebPage[]> {
    const params = new HttpParams().set('query', query); // Configura los parámetros de la solicitud
    return this.http.get<WebPage[]>(`${this.URL_API}/search`, { params });
  }

  scrapearContent() {
    return this.http.get<string[]>(`${this.URL_API}/scrapperUrls`)
  }

  getUrlsScrappings() {
    return this.http.get<WebPage[]>(`${this.URL_API}/getUrls`);
  }

  getAllWebPages() {
    return this.http.get<WebPage[]>(`${this.URL_API}/all`);
  }

  saveWebPage(webpage: object){
    return this.http.post<WebPage>(`${this.URL_API}/save`, webpage)
  }

  disabledByUrl(id: Number) {
    console.log(`${this.URL_API}/inhabilited/${id}`)
    return this.http.get<any>(`${this.URL_API}/inhabilited/${id}`)
  }
}
