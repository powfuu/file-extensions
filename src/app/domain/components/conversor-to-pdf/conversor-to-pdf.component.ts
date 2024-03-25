import { CUSTOM_ELEMENTS_SCHEMA, Component, OnInit } from '@angular/core';
import { documentAttach, layers, documents } from 'ionicons/icons';
import { addIcons } from 'ionicons';
import { DocumentService } from '../../shared/services/document.service';
import { ToastService } from 'src/core/services/toast/toast.service';

@Component({
  selector: 'app-conversor-to-pdf',
  standalone: true,
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  templateUrl: './conversor-to-pdf.component.html',
  styleUrls: ['./conversor-to-pdf.component.scss'],
})
export class ConversorToPdfComponent implements OnInit {

  constructor(private toast: ToastService,private documentService: DocumentService) {}

  ngOnInit() {
    addIcons({ documentAttach, layers, documents });
  }

  async attachDocument() {
    try {
      const file = await this.documentService.selectFile();
      this.toast.error(`FILE EXTENSION: ${String(file.name.split(".").pop()).toUpperCase()}`);
    } catch (error) {
      this.toast.error("Error de extensión al convertir el documento a PDF");
    }
  }
}

