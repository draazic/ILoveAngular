import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';

import {ErrorInterceptor } from './_helpers/error.interceptor';
import { JwtInterceptor } from './_helpers//jwt.interceptor';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import {fakeBackendProvider} from './_helpers/fake-backend';
import {DatacurrentService} from './_services/data.current.service';
import { ImageCropperModule } from 'ngx-image-cropper';
import {ReactiveFormsModule } from '@angular/forms';
import { ContactComponent } from './contact/contact.component';
import { ClientsComponent } from './clients/clients.component';
import { ClientdetailComponent } from './clients/clientdetail/clientdetail.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    ContactComponent,
    ClientsComponent,
    ClientdetailComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    HttpClientModule,
    AppRoutingModule,
    ImageCropperModule
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true },

    // provider used to create fake backend
    fakeBackendProvider,
    DatacurrentService

],

  bootstrap: [AppComponent]
})
export class AppModule { }
