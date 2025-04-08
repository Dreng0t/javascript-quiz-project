class Quiz {
    // YOUR CODE HERE:
    //
    // 1. constructor (questions, timeLimit, timeRemaining)

    // 2. getQuestion()
    
    // 3. moveToNextQuestion()

    // 4. shuffleQuestions()

    // 5. checkAnswer(answer)

    // 6. hasEnded()
    constructor(questions, timeLimit, timeRemaining){
        this.questions = questions;
        this.timeLimit = timeLimit;
        this.timeRemaining = timeRemaining;
        this.correctAnswers = 0;
        this.currentQuestionIndex = 0;

    }

    getQuestion() {
        return this.questions[this.currentQuestionIndex];
    }

    moveToNextQuestion(){
        return this.currentQuestionIndex++;
    }

    shuffleQuestions() {
        for (let i = this.questions.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1)); // Pick a random index from 0 to i
            [this.questions[i], this.questions[j]] = [this.questions[j], this.questions[i]]; // Swap
        }
    }

    checkAnswer(answer){
        if (answer){
            return this.correctAnswers++;
        }
    }

    hasEnded(){
        if (this.currentQuestionIndex < this.questions.length){
            return false;
        }else{
            return true;
        }
    }

    filterQuestionsByDifficulty(difficulty) {
        if (typeof difficulty !== "number" || difficulty < 1 || difficulty > 3){
            return;
        }
        
        this.questions = this.questions.filter((question) => {
            return question.difficulty === difficulty;
        })
    }

    averageDifficulty() {
        const total = this.questions.reduce((sum, question) => {
            return sum + question.difficulty;
        }, 0)

        return total/(this.questions.length);
    }
}





/*
function countYearsInOffice(presidentsArr) {
  return presidentsArr.reduce((sum, president) => {
    if (president.leftOffice === null) {
      return sum;
    }

    return sum + (president.leftOffice - president.tookOffice);
  }, 0);
}

*/