class Group {
    constructor() {
        this.members = [];
    }

    add(value) {
        if (!this.has(value)) {
            this.members.push(value);
        }
    };

    delete(value) {
        this.members = this.members.filter(v => v !== value);
    };


    has(value) {
        return this.members.includes(value);
    };
}
var gr = new Group();

gr.add(1);
gr.add(1);
console.log(gr.has(1));