import {Component, OnInit} from '@angular/core';
import {BehaviorSubject, Observable} from 'rxjs';
import {Toast} from '../shared/model/toast';
import {filter} from 'rxjs/operators';
import {ToastType} from '../shared/model/type';
import {ToastService} from '../shared/service/toast.service';

@Component({
  selector: 'app-toast-form',
  templateUrl: './toast-form.component.html',
  styleUrls: ['./toast-form.component.css']
})
export class ToastFormComponent implements OnInit {

  public title: string;
  public content: string;
  public type: ToastType;
  public delay: number;
  public displayDelay: boolean;
  public vertical: number;
  public horizontal: number;

  constructor(private service: ToastService) {
  }

  ngOnInit(): void {
  }

  onSubmit() {
    this.service.addToast({
      content: this.content,
      title: this.title,
      delay: this.delay,
      displayDelay: this.displayDelay,
      horizontal: this.horizontal,
      type: this.type,
      vertical: this.vertical,
    });
  }

}
