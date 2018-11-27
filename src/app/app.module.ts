import { BrowserModule } from '@angular/platform-browser';
import { LOCALE_ID, NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import localeEs from '@angular/common/locales/es';
import { registerLocaleData } from '@angular/common';

import { AppComponent } from './app.component';
import { CapitalizadoPipe } from './pipes/capitalizado.pipe';
import { DomseguroPipe } from './pipes/domseguro.pipe';

registerLocaleData(localeEs);

@NgModule({
  declarations: [AppComponent, CapitalizadoPipe, DomseguroPipe],
  imports: [BrowserModule, FormsModule],
  providers: [{ provide: LOCALE_ID, useValue: 'es' }],
  bootstrap: [AppComponent]
})
export class AppModule {}
