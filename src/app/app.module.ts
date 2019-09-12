import { HttpClientModule } from '@angular/common/http';
import { HeroesModule } from './heroes/heroes.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

// Custom Modules
import { SharedModule } from './shared/shared.module';

// @NGRX
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { appReducers } from './store/app.reducer';
import { environment } from 'src/environments/environment';
import { EffectsModule } from '@ngrx/effects';
import { effectsArr } from './store/effects';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SharedModule,
    HeroesModule,
    HttpClientModule,
    StoreModule.forRoot(appReducers),
    StoreDevtoolsModule.instrument({
      maxAge: 25,
      logOnly: environment.production
    }),
    EffectsModule.forRoot(effectsArr)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
