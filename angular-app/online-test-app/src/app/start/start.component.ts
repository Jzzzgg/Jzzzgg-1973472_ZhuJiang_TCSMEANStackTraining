import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import Quiz from '../quiz.model';
import { QuizzesService } from '../quizzes.service';

@Component({
  selector: 'app-start',
  templateUrl: './start.component.html',
  styleUrls: ['./start.component.css']
})
export class StartComponent implements OnInit {
  username : string = "Guest";
  index : number = 0;
  quizzes : Quiz[] = [];
  start : boolean = false;
  status : boolean = true;
  choice : string = "" ;
  choices : number[] =[];
  correctNumber : number= 0;

  constructor(private quizSer : QuizzesService, private router : Router) { }

  ngOnInit(): void {
    this.quizSer.loadData().subscribe(
      quiz => this.quizzes = quiz,
      error => console.log(error)
    );
  }
  submit(){
    localStorage.setItem("token","ok")
    for(let i = 0; i<this.quizzes.length; i++){
        if(this.choices[i] === this.quizzes[i].correctAnswer)
        {
          this.correctNumber++;
        }
    }
    localStorage.setItem("yourAnswer",JSON.stringify(this.choices))
    localStorage.setItem("correctNumber", this.correctNumber.toString());
    this.router.navigate(["ans"]);
  }
  next(){

    this.pushChoice()
    if(this.index<9){
      this.index += 1;
    }else if (this.index == 9){
      this.status = false;
    }
    
  }
  pre(){
    if(this.index > 0){
      this.index -= 1;
      this.status = true;
    }
  }
  save(num: string ) {
    this.choice = num;

  }
  pushChoice(){
      this.choices[this.index] = parseInt(this.choice);
  }
  
  startQuizzes(){
    this.start = true;
    localStorage.setItem("name",this.username);
  }
  setName(name : string){
      this.username = name;
  }
  
}
