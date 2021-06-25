import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';
import {HttpClientModule} from '@angular/common/http';
import { FormsModule, ReactiveFormsModule} from '@angular/forms'
import { JwtModule } from '@auth0/angular-jwt';

import { IonicModule, IonicRouteStrategy,  } from '@ionic/angular';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';

@NgModule({
  declarations: [AppComponent],
  entryComponents: [],
  imports: [BrowserModule, 
    IonicModule.forRoot(),
     AppRoutingModule,
     HttpClientModule,
     FormsModule,
     ReactiveFormsModule,
     JwtModule.forRoot({
      config: {
        // ...
        tokenGetter: () => {
          return localStorage.getItem("token");
        },
      },
    }),],
  providers: [{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy }],
  bootstrap: [AppComponent],
})
export class AppModule {}
