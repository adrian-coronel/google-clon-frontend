import { Component, OnInit } from '@angular/core';
import { WebPage } from '../models/web-page.model';
import { WebPageService } from '../services/web-page-service.service';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-support',
  standalone: true,
  imports: [
    FormsModule,
    CommonModule,
  ],
  templateUrl: './support.component.html',
  styleUrl: './support.component.css'
})
export class SupportComponent implements OnInit{

  public webpages: WebPage[] = []

  constructor(private webPageService: WebPageService) {}

  ngOnInit(): void {
    this.getAll()
  }

  getAll() {
    this.webPageService.getAllWebPages().subscribe(
      (data: WebPage[]) => {
        this.webpages = data;
      },
      (error) => {
        console.error('Error al buscar páginas web', error);
      }
    );
  }

  disabledPage(id: number) {
    this.webPageService.disabledByUrl(id);
    this.getAll();
  }
}
