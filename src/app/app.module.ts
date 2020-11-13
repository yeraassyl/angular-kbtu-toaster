import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ToastComponent } from './toast/toast.component';
import { ToastFormComponent } from './toast-form/toast-form.component';
import {FormsModule} from '@angular/forms';
import {ToastService} from './shared/service/toast.service';

@NgModule({
  declarations: [
    AppComponent,
    ToastComponent,
    ToastFormComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
  ],
  providers: [ToastService],
  bootstrap: [AppComponent]
})
export class AppModule { }
