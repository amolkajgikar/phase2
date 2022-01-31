import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './component/login/login.component';
import { SharedModule } from '../shared/shared.module';
import { SignupComponent } from './signup/signup.component';



@NgModule({
  declarations: [
    LoginComponent,
    SignupComponent
  ],
  imports: [
    CommonModule,SharedModule
  ],
 exports:[LoginComponent,SignupComponent],
})
export class AuthModule { }
