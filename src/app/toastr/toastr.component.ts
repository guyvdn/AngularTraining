import { Component, Injectable, ViewContainerRef } from '@angular/core';
import { ToastsManager } from 'ng2-toastr';

import { ToastrService } from './toastr.service';

@Component({
  selector: 'app-toastr',
  template: '',
})
@Injectable()
export class ToastrComponent {
  constructor(
    private toastr: ToastsManager,
    private vcr: ViewContainerRef,
    private toastrService: ToastrService
  ) {
    this.toastr.setRootViewContainerRef(vcr);

    toastrService.onShowError.subscribe(message => this.showError(message));
  }

  showError(message: string) {
    this.toastr.error(message);
  }
}
