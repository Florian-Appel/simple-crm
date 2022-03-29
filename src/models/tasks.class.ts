export class Tasks {
    task: string;
    user: string;
    status: string;
    createdDate: number;
    finishDate: number;
    note: string;

    constructor(obj?: any) {
        this.task = obj ? obj.task : '';
        this.user = obj ? obj.name : '';
        this.status = obj ? obj.status : '';
        this.createdDate = obj ? obj.createdDate : '';
        this.finishDate = obj ? obj.finishDate : '';
        this.note = obj ? obj.note : '';
    }

    public toJSON() {
        return {
            task: this.task,
            user: this.user,
            status: this.status,
            createdDate: this.createdDate,
            finishDate: this.finishDate,
            note: this.note
        };
    }
}