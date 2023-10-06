import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { AuthRoutingModule } from './auth-routing.module';

import { LayoutAuthPageComponent } from './pages/layout-auth-page/layout-auth-page.component';

import { LoginFormComponent } from './components/login/login-form.component';
import { RegisterFormComponent } from './components/register/register-form.component';



@NgModule({
  declarations: [
    LayoutAuthPageComponent,
    LoginFormComponent,
    RegisterFormComponent,

  ],
  imports: [
    CommonModule,
    AuthRoutingModule,
    ReactiveFormsModule
  ]
})
export class AuthModule { }
