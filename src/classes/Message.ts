export class Message {
    readonly date: Date = new Date();
    public read = false;
    public content = "";

    constructor(content: string) {
        if (content) {
            this.content = content;
        }
    }
}