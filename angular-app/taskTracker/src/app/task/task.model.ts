import { Data } from "@angular/router";

export default class TaskModel{
    public get date(): Date {
        return this._date;
    }
    public set date(value: Date) {
        this._date = value;
    }
    public get task(): string {
        return this._task;
    }
    public set task(value: string) {
        this._task = value;
    }
    public get name(): string {
        return this._name;
    }
    public set name(value: string) {
        this._name = value;
    }
    public get id(): string {
        return this._id;
    }
    public set id(value: string) {
        this._id = value;
    }

    constructor(
        private _id: string,
        private _name: string,
        private _task: string,
        private _date: Date
    ){}

}