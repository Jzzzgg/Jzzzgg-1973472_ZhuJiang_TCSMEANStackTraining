export default class Answer{
   
    public get question(): string {
        return this.question;
    }
    public set question(value: string) {
        this.question = value;
    }
    public get correctAnswer(): string {
        return this.correctAnswer;
    }
    public set correctAnswer(value: string) {
        this.correctAnswer = value;
    }
    public get yourAnswer(): string {
        return this.yourAnswer;
    }
    public set yourAnswer(value: string) {
        this.yourAnswer = value;
    }

    constructor(
        yourAnswer: string,
        correctAnswer: string,
        question: string
    ){

    }

}