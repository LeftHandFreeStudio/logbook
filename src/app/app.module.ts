import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppMaterialModuleModule } from './app-material-module/app-material-module.module';
import { CounterComponent } from './app/counter/counter.component';

@NgModule({
  declarations: [AppComponent, CounterComponent],
  imports: [BrowserModule, BrowserAnimationsModule, AppMaterialModuleModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
