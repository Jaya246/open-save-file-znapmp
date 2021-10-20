import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ExcelService } from '../services/excel.service';
import { AppComponent } from './app.component';

@NgModule({
  imports: [BrowserModule],
  providers: [ExcelService],
  declarations: [AppComponent],
  bootstrap: [AppComponent],
})
export class AppModule {}
