import {Component, Input, OnInit, Output, EventEmitter} from '@angular/core';
import {Toast} from '../shared/model/toast';

@Component({
  selector: 'app-toast',
  templateUrl: './toast.component.html',
  styleUrls: ['./toast.component.css']
})
export class ToastComponent implements OnInit {

  @Input() toast: Toast;
  @Input() ind: number;

  @Output() remove = new EventEmitter<number>();

  constructor() { }

  ngOnInit(): void {
  }

}
