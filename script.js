document.addEventListener("DOMContentLoaded", () => {
  class QuizApp {
    constructor() {
      this.question = document.querySelectorAll("h1");
      this.form = document.querySelector("form");
      this.input = document.querySelector("input");
      this.answer = document.querySelector("p");
      this.counter = document.querySelector("span");

      this.time = 3;
      this.interval = null;

      this.init();
    }

    init() {
      this.form.addEventListener("submit", (e) => this.handleSubmit(e));
      this.setNewQuestion();
      this.counter.style.display = "none";
    }

    changeBackgroundColor() {
      const randomColor = `rgb(${Math.floor(Math.random() * 256)}, ${Math.floor(
        Math.random() * 256
      )}, ${Math.floor(Math.random() * 256)})`;
      document.documentElement.style.setProperty(
        "--button-52-bg-color",
        randomColor
      );
    }

    startCounter() {
      this.counter.style.display = "inline";
      this.counter.innerHTML = this.time;
      this.interval = setInterval(() => {
        this.time--;
        this.counter.innerHTML = this.time;
        if (this.time === 0) {
          clearInterval(this.interval);
          this.counter.style.display = "none";
          this.time = 3;
          this.setNewQuestion();
        }
      }, 1000);
    }

    generateBinary() {
      return Array.from({ length: 4 }, () => Math.floor(Math.random() * 2));
    }

    setNewQuestion() {
      const binaryQuestion = this.generateBinary().join("");
      this.question[0].innerHTML = binaryQuestion;
      this.answer.innerHTML = "Combien fait en hexadécimal : ";
      this.changeBackgroundColor();
    }

    handleSubmit(e) {
      e.preventDefault();

      const inputUser = this.input.value.toUpperCase();
      this.input.value = "";

      const binaryQuestion = this.question[0].innerHTML;
      const hexQuestion = parseInt(binaryQuestion, 2)
        .toString(16)
        .toUpperCase();

      if (inputUser === hexQuestion) {
        this.answer.innerHTML = "Correct!";
        this.startCounter();
        confetti(); // Assuming confetti is a global function
      } else {
        this.answer.innerHTML = "Incorrect. La réponse est " + hexQuestion;
      }
    }
  }

  new QuizApp();
});
