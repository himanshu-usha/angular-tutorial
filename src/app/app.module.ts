import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GetComponent } from './crud/get/get.component';
import { HomeComponent } from './home/home.component';
import { TemplateDrivenFormsComponent } from './forms/template-driven-forms/template-driven-forms.component';
import { StudentsComponent } from './observables/students.component';
import { DataService } from './observables/data.service';
import { UsersComponent } from './parameterized-routing/users/users.component';
import { UserDetailsComponent } from './parameterized-routing/users/user-details/user-details.component';
import { UserService } from './api-services/user.service';

@NgModule({
  declarations: [
    AppComponent,
    GetComponent,
    HomeComponent,
    TemplateDrivenFormsComponent,
    StudentsComponent,
    UsersComponent,
    UserDetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    BrowserAnimationsModule
  ],
  providers: [DataService, UserService],
  bootstrap: [AppComponent]
})
export class AppModule { }
