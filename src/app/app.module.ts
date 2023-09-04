import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from "@angular/common/http";
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from "@ngrx/store";
import { ImageEffects } from './store/image.effects';

import { AppComponent } from './app.component';
import { DrawerComponent } from './components/drawer/drawer.component';
import { DrawButtonComponent } from './components/draw-button/draw-button.component';
import { annotationsReducer } from './store/annotations.reducers';
import { AnnotationsEffects } from './store/annotations.effects';

@NgModule({
  declarations: [
    AppComponent,
    DrawerComponent,
    DrawButtonComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    EffectsModule.forRoot([ImageEffects, AnnotationsEffects]),
    StoreModule.forRoot({ annotations: annotationsReducer }),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }