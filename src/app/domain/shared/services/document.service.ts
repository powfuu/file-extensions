import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class DocumentService {
  constructor() { }


  selectFile(): Promise<File> {
    return new Promise((resolve, reject) => {
      const input = document.createElement('input');
      input.type = 'file';

      input.onchange = (event: any) => {
        const file = event.target.files[0];
        if (file) {
          resolve(file);
        } else {
          reject(new Error('Tipo de archivo no permitido.'));
        }
      };

      input.onerror = (error) => {
        reject(error);
      };

      input.click();
    });
  }

}
