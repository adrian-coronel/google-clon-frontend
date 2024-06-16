import { Component } from '@angular/core';
import { WebPage } from '../../models/web-page.model';
import { ActivatedRoute, Router } from '@angular/router';
import { WebPageService } from '../../services/web-page-service.service';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import swal from 'sweetalert';

@Component({
  selector: 'app-support-form',
  standalone: true,
  imports: [
    FormsModule,
    CommonModule
  ],
  templateUrl: './support-form.component.html',
  styleUrl: './support-form.component.css'
})
export class SupportFormComponent {

  public urlSave: string = "";
  public webPage: any = null;
  public urlsScrapping: string[] = [];
  public isSaved: boolean = true;
  public isSrapping: boolean = true;
  public loading: boolean = false;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private pageService: WebPageService
  ) {}

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      // this.pageService.getPage(+id).subscribe(page => this.page = page);
    }
  }

  save() {
    if (this.isValidUrl(this.urlSave)) {
      this.isSaved = false;
      this.pageService.saveWebPage({ url: this.urlSave}).subscribe(wp => {
        this.webPage = wp;
        this.isSaved = true;
        swal("Guardado correctamente")
      });
    }
  }

  screapear() {
    this.urlsScrapping = [];
    this.loading = true;
    this.pageService.scrapearContent().subscribe( res => {
      console.log(res)
      this.loading = false;
      this.urlsScrapping = res
      swal({
        text: "Scrapping succesfull",
      });
    });

  }

  isValidUrl(url: string): boolean {
    try {
      new URL(url);
      return true;
    } catch (error) {
      return false;
    }
  }

}
