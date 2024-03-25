import { Injectable, inject } from '@angular/core';
import { ToastService } from '../toast/toast.service';
import { LocalStoreService } from '../localStore/local-store.service';
import { ModalController } from '@ionic/angular/standalone';

@Injectable({
  providedIn: 'root',
})
export class UtilService {
  modalController = inject(ModalController);
  toastService = inject(ToastService);
  localStoreService = inject(LocalStoreService);

  generateId(): number {
    const min = 10000;
    const max = 99999;
    const id = Math.floor(Math.random() * (max - min + 1)) + min;
    return id;
  }
}
