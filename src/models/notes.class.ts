export class Notes {
    title: string;
    note: string;

    constructor(obj?: any) {
        this.title = obj ? obj.title : '';
        this.note = obj ? obj.note : '';
    }

    public toJSON() {
        return {
            title: this.title,
            note: this.note
        };
    }
}