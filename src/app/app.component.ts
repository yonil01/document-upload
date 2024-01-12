import { Component } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {ServiceDocumentService} from "./services/service-document/service-document.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'tes-documents';


  public base64data: string = '';

  constructor(private http: HttpClient,
              private serviceDocumentService: ServiceDocumentService) {}

  convertFileToBase64() {
    this.serviceDocumentService.getContent().subscribe((data: any) => {
      debugger
      this.base64data = data.contenido;
    });
  }
}
