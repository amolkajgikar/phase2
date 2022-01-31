import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { AuthModule } from './auth/auth.module';
import { LoginComponent } from './auth/component/login/login.component';
import { SignupComponent } from './auth/signup/signup.component';
import { FormsComponent } from './admin/components/bform/forms/forms.component';
import { ListComponent } from './admin/components/blist/list/list.component';
import { BookComponent } from './admin/services/book/book/book.component';

import { HomeModule } from './home/home.module';
import { HomeComponent } from './home/home/home.component';
import { SharedModule } from './shared/shared.module';
// Step 1: Define Routes/Paths

const routes = [
  {path:'', component: HomeComponent},
  {path:'login', component: LoginComponent},
  {path: 'signup', component: SignupComponent},
  // {path: 'admin/book/add',components:FormsComponent},
  // {path: 'admin/book/list',components:ListComponent}
]

// Step 2: Make Module aware(import) of these paths
@NgModule({
  //componenent in the module
  declarations: [
    AppComponent
  ],
  // Imports Module is dependant on
  imports: [
    BrowserModule,
    AuthModule,
     // Make module aware of routing paths.
    RouterModule.forRoot(routes),
            HomeModule,
            SharedModule   

  ],
  providers: [],
  //ENtry Points
  bootstrap: [AppComponent]
})
export class AppModule { }
