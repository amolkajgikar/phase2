import { FormBuilder, FormGroup,FormControl } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-exam',
  templateUrl: './exam.component.html',
  styleUrls: ['./exam.component.css']
})
export class ExamComponent implements OnInit {
  myForm:FormGroup;
  msg?:string;
  questions=[
    {question:"5+6",ans1:"4",ans2:"11",ans3:"30",ans4:"3",correctAns:"11"},
    {question:"10-5",ans1:"5",ans2:"11",ans3:"30",ans4:"3",correctAns:"5"},
    {question:"5*6",ans1:"4",ans2:"11",ans3:"30",ans4:"3",correctAns:"30"},
  ]

  constructor(public form:FormBuilder) { //DI for for formbuilder to create refernece for form group
    this.myForm=form.group({})
  }

  ngOnInit(): void {
    this.questions.forEach(q=>{
      // if(this.myForm!=undefined)
      this.myForm?.addControl(q.question, this.form.control(""));
    })
  }
 


}
