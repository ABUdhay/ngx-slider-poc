import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { NgxSliderModule } from '@angular-slider/ngx-slider';

import { CustomSliderComponent } from './custom-slider/custom-slider.component';
import { AppComponent } from './app.component';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    NgxSliderModule
  ],
  declarations: [ AppComponent, CustomSliderComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
