import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
// import { BformComponent } from './components/bform/bform.component';
import { FormsComponent } from './components/bform/forms/forms.component';
import { ListComponent } from './components/blist/list/list.component';
import { BookComponent } from './services/book/book/book.component';
import { SharedModule } from '../shared/shared.module';



@NgModule({
  declarations: [
    
    FormsComponent,
    ListComponent,
    BookComponent
  ],
  imports: [
    CommonModule,SharedModule
  ]
})
export class AdminModule { }
