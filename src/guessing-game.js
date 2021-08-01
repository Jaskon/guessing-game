class GuessingGame {
    setRange(min, max) {
        this.min = min;
        this.max = max;
    }

    getMiddle() {
        return Math.round((this.max - this.min) / 2) + this.min;
    }

    guess() {
        return this.getMiddle();
    }

    lower() {
        this.max = this.getMiddle();
    }

    greater() {
        this.min = this.getMiddle();
    }
}

module.exports = GuessingGame;
