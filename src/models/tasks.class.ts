export class Tasks {
    task: string;
    name: string;
    status: string;
    date1: number;
    date2: number;

    constructor(obj?: any) {
        this.task = obj ? obj.task : '';
        this.name = obj ? obj.name : '';
        this.status = obj ? obj.status : '';
        this.date1 = obj ? obj.date1 : '';
        this.date2 = obj ? obj.date2 : '';
    }

    public toJSON() {
        return {
            task: this.task,
            name: this.name,
            status: this.status,
            date1: this.date1,
            date2: this.date2
        }
    }
}