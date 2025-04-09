class Question {

    constructor(text, choice, answer, difficulty){
        this.text = text;
        this.choices = choice;
        this.answer = answer;
        this.difficulty = difficulty;
    }

    shuffleChoices() {
        for (let i = this.choices.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1)); // Pick a random index from 0 to i
            [this.choices[i], this.choices[j]] = [this.choices[j], this.choices[i]]; // Swap
        }
    }
}