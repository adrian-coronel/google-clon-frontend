import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { WebPage } from '../models/web-page.model';
import { WebPageService } from '../services/web-page-service.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-search',
  standalone: true,
  imports: [
    FormsModule, CommonModule
  ],
  templateUrl: './search.component.html',
  styleUrl: './search.component.css'
})
export class SearchComponent implements OnInit{

  public query: string = ''
  public webpages: WebPage[] = []

  constructor(private route: ActivatedRoute, private webpageService: WebPageService) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      this.query = params.get('query') || ''
    })

    this.loadWebPages();

  }

  loadWebPages() {
    console.log("Ejecuto")
    this.webpageService.searchWebPages(this.query).subscribe(
      (data: WebPage[]) => {
        console.log(data)
        this.webpages = data;
      },
      (error) => {
        console.error('Error al buscar páginas web', error);
      }
    );
  }


  search() {
    if (this.query.length > 2){
      this.loadWebPages();
    }
  }

}
