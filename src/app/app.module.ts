import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { CabecalhoComponent } from './cabecalho/cabecalho.component';
import { BotaoSyncComponent } from './botao-sync/botao-sync.component';


@NgModule({
  declarations: [
    AppComponent,
    CabecalhoComponent,
    BotaoSyncComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
