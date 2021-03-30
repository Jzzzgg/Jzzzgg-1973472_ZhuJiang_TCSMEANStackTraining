import { Component, OnDestroy, OnInit } from '@angular/core';
import Answer from '../ans.model';
import Quiz from '../quiz.model';
import { QuizzesService } from '../quizzes.service';

@Component({
  selector: 'app-result',
  templateUrl: './result.component.html',
  styleUrls: ['./result.component.css']
})
export class ResultComponent implements OnInit, OnDestroy {

  correctString : string = ""; 
  passFail : boolean = true;
  username : string|null = "";
  showStatus : boolean= false;
  quizzes : Quiz[] = [];
  correctNumber : number [] = [];
  yourNumber : number []  =[];
  correctAnswer : string[] =[];
  yourAnswer : string[] = [];
  result : Answer[] = [];

  constructor(private quizSer : QuizzesService) { }

  ngOnInit(): void {
    this.calcul()
    this.loadData()
    
  }
  ngOnDestroy() : void{
    localStorage.removeItem("token");
    localStorage.removeItem("yourAnswer");
    localStorage.removeItem("name");
    localStorage.removeItem("correctNumber");
  }

  calcul(): void{
      let val = localStorage.getItem("correctNumber")
      this.username = localStorage.getItem("name")
      if(val){
        let corrects = parseInt(val);
        if(corrects > 5){
          this.passFail = true;
          this.correctString = `${corrects}/10`
        }else{
          this.passFail = false;
          this.correctString = `${corrects}/10`
        }
      }
     
  } 
loadData(){
  this.quizSer.loadData().subscribe(
    data => this.quizzes = data
  )}
calcAnswer(arr : number[]  , arryPush : string[]){
  for(let i = 0; i < arr.length; i++){
    switch(arr[i]){
      case 1 : arryPush.push(this.quizzes[i].answer1);
      break;
      case 2 : arryPush.push(this.quizzes[i].answer2);
      break;
      case 3 : arryPush.push(this.quizzes[i].answer3);
      break;
      case 4 : arryPush.push(this.quizzes[i].answer4);
      break;
      default : arryPush.push("No Answer");
    }
  }
}
getNumber(){
  let i = 0;
  while(i < this.quizzes.length){
    this.correctNumber.push(this.quizzes[i].correctAnswer)
    i++;
  }
  let numbers : string | null= localStorage.getItem("yourAnswer");
   if(numbers){
       let arr : number[] = JSON.parse(numbers);
       this.yourNumber = arr;
   }
}
combin(){

  for(let i= 0; i < this.yourAnswer.length; i++){
    let temp : Answer = {
    correctAnswer : this.correctAnswer[i],
    question : this.quizzes[i].question,
    yourAnswer : this.yourAnswer[i],
  }
    this.result.push(temp)
  }
}

  show(){
    
    this.showStatus = true;

    this.getNumber();
    this.calcAnswer(this.yourNumber, this.yourAnswer);
    this.calcAnswer(this.correctNumber,this.correctAnswer);
    this.combin()
  }

}
