import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ToggleSidenavService {

  constructor() { }

  private sidenavToggledSource = new Subject();
  sidenavToggled$ = this.sidenavToggledSource.asObservable();

  toggleSidenav(): void {
    this.sidenavToggledSource.next(null);
  }

}
