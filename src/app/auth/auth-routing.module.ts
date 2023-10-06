import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutAuthPageComponent } from './pages/layout-auth-page/layout-auth-page.component';
import { LoginFormComponent } from './components/login/login-form.component';
import { RegisterFormComponent } from './components/register/register-form.component';

// localhost:4200/auth/
const routes: Routes = [
  {
    path: '',
    component: LayoutAuthPageComponent,
    children: [
      { path: 'login', component: LoginFormComponent },
      { path: 'new-account', component: RegisterFormComponent },
      { path: '**', redirectTo: 'login' },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthRoutingModule { }
