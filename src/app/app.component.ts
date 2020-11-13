import {Component, OnInit} from '@angular/core';
import {Toast} from './shared/model/toast';
import {ToastService} from './shared/service/toast.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'toasts';

  toasts: Toast[] = [];

  constructor(private toaster: ToastService) {
  }

  ngOnInit(): void {
    this.toaster.toast$
      .subscribe(toast => {
        this.toasts = [toast, ...this.toasts];
        if (toast.delay > 0){
          const interval = setInterval(() => {
            toast.delay--;
            if (toast.delay === 0){
              this.remove(this.toasts.findIndex(t => t === toast));
              clearInterval(interval);
            }
          }, 1000);
        }
      });
  }

  remove(index: number): void {
    this.toasts = this.toasts.filter((v, i) => i !== index);
  }

}
