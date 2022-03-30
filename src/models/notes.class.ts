export class Tasks {
    title: string;
    note: string;

    constructor(obj?: any) {
        this.title = obj ? obj.title : '';
        this.note = obj ? obj.note : '';
    }

    public toJSON() {
        return {
            task: this.title,
            user: this.note,
        };
    }
}

// Noch nicht eingebunden