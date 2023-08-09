import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { IonicSelectableModule } from 'ionic-selectable';
import { AppComponent } from './app.component';
import { HomePage } from './pages/home/home';
import { PortService } from './services/port.service';

let components = [AppComponent, HomePage];

@NgModule({
  declarations: components,
  imports: [
    BrowserModule,
    IonicModule.forRoot(AppComponent),
    IonicSelectableModule,
  ],
  bootstrap: [IonicApp],
  entryComponents: components,
  providers: [
    { provide: ErrorHandler, useClass: IonicErrorHandler },
    PortService,
  ],
})
export class AppModule {}
