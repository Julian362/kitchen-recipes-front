import { CommonModule } from '@angular/common';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { provideFirebaseApp } from '@angular/fire/app';
import { provideAuth } from '@angular/fire/auth';
import { FIREBASE_OPTIONS } from '@angular/fire/compat';
import { BrowserModule } from '@angular/platform-browser';
import { InfrastructureModule } from '@infrastructure/infrastructure.module';
import { MainRoutingModule } from '@presentation/modules/main/main-routing.module';
import { TokenInterceptorInterceptor } from '@presentation/shared/interceptors/token-interceptor.interceptor';
import { SharedModule } from '@presentation/shared/shared.module';
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { environment } from 'src/environments/environment';
import { NavbarComponent } from './components/navbar/navbar.component';
import { AppComponent } from './pages/app/app.component';

@NgModule({
  declarations: [AppComponent, NavbarComponent],
  imports: [
    InfrastructureModule,
    MainRoutingModule,
    HttpClientModule,
    CommonModule,
    BrowserModule,
    SharedModule,
    MainRoutingModule,
    provideFirebaseApp(() => initializeApp(environment.firebase)),
    provideAuth(() => getAuth()),
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: TokenInterceptorInterceptor,
      multi: true,
    },
    { provide: FIREBASE_OPTIONS, useValue: environment.firebase },
  ],
  bootstrap: [AppComponent],
})
export class MainModule {}
