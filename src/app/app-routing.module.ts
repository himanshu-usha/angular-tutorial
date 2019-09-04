import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { GetComponent } from './crud/get/get.component';
import { TemplateDrivenFormsComponent } from './forms/template-driven-forms/template-driven-forms.component';
import { StudentsComponent } from './observables/students.component';
import { UsersComponent } from './parameterized-routing/users/users.component';
import { UserDetailsComponent } from './parameterized-routing/users/user-details/user-details.component';

const routes: Routes = [{ path: '', component: HomeComponent },
{ path: 'get', component: GetComponent },
{ path: 'forms', component: TemplateDrivenFormsComponent },
{ path: 'observable', component: StudentsComponent },
{  path: 'users', component: UsersComponent },
{  path: 'details/:id', component: UserDetailsComponent
}, ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
