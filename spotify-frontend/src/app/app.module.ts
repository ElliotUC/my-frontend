import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http'; 
import { AtomSpinnerModule } from 'angular-epic-spinners'

import { AppComponent } from './app.component';
import { SearchComponent } from './components/search/search.component';
import { AlbumComponent } from './components/album/album.component';


@NgModule({
  declarations: [
    AppComponent,
    SearchComponent,
    AlbumComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    AtomSpinnerModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
