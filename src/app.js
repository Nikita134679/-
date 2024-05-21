export class Team {
    constructor() {
        this.members = new Set();
    };

    add(character) {
        if (this.members.has(character)) {
            throw new Error('Персонаж уже есть в команде');
        }
        this.members.add(character);
    };

    addAll(...items) {
        items.forEach(item => this.add(item));
    };

    toArray() {
        return Array.from(this.members);
    };
};