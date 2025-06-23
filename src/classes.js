
class Ship {
    constructor (length) {
        this.length = length;
    }
    hits = 0;

    hit() {
        if (this.isSunk()) {
            return
        }
        this.hits++;
    }

    isSunk() {
        if (this.hits === this.length) {
            return true
        }
    }
}

export {Ship};