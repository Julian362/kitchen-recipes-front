import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { provideFirebaseApp } from '@angular/fire/app';
import { provideAuth } from '@angular/fire/auth';
import { BrowserModule } from '@angular/platform-browser';
import { InfrastructureModule } from '@infrastructure/infrastructure.module';
import { MainRoutingModule } from '@presentation/modules/main/main-routing.module';
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { environment } from 'src/environments/environment';
import { AppComponent } from './pages/app/app.component';

@NgModule({
  declarations: [AppComponent],
  imports: [
    InfrastructureModule,
    HttpClientModule,
    CommonModule,
    BrowserModule,
    MainRoutingModule,
    provideFirebaseApp(() => initializeApp(environment.firebase)),
    provideAuth(() => getAuth()),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class MainModule {}
