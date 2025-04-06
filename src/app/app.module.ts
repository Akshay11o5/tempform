import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { TempformComponent } from './shared/components/tempform/tempform.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [AppComponent, TempformComponent],
  imports: [BrowserModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
