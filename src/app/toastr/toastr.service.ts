// more info at https://angular.io/guide/component-interaction#parent-and-children-communicate-via-a-service
import { Injectable, Output } from '@angular/core';
import { Subject } from 'rxjs/Subject';

@Injectable()
export class ToastrService {
  @Output() public onShowError = new Subject<string>();

  public showError(message: string) {
    this.onShowError.next(message);
  }
}
