import {Injectable} from '@angular/core';
import {BehaviorSubject, Observable} from 'rxjs';
import {Toast} from '../model/toast';
import {filter} from 'rxjs/operators';
import {ToastType} from '../model/type';

@Injectable({
  providedIn: 'root'
})
export class ToastService {
  subject: BehaviorSubject<Toast>;
  toast$: Observable<Toast>;

  constructor() {
    this.subject = new BehaviorSubject<Toast>(null);
    this.toast$ = this.subject.asObservable().pipe(filter(toast => toast !== null));
  }

  addToast(obj: Toast): void {
    this.subject.next(obj);
  }
}
