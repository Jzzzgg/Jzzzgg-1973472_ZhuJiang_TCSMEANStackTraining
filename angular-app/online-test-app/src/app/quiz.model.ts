export default class Quiz{
    public get correctAnswer(): number {
        return this._correctAnswer;
    }
    public set correctAnswer(value: number) {
        this._correctAnswer = value;
    }
    public get answer4(): string {
        return this._answer4;
    }
    public set answer4(value: string) {
        this._answer4 = value;
    }
    public get answer3(): string {
        return this._answer3;
    }
    public set answer3(value: string) {
        this._answer3 = value;
    }
    public get answer2(): string {
        return this._answer2;
    }
    public set answer2(value: string) {
        this._answer2 = value;
    }
    public get answer1(): string {
        return this._answer1;
    }
    public set answer1(value: string) {
        this._answer1 = value;
    }
    public get question(): string {
        return this._question;
    }
    public set question(value: string) {
        this._question = value;
    }

    constructor(
        private _question: string,
        private _answer1: string,
        private _answer2: string,
        private _answer3: string,
        private _answer4: string,
        private _correctAnswer: number
        ){}
    
}