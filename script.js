document.addEventListener("DOMContentLoaded", () => {
  const question = document.querySelectorAll("h1");
  const form = document.querySelector("form");
  const input = document.querySelector("input");
  const answer = document.querySelector("p");
  const counter = document.querySelector("span");

  let time = 3;
  let interval;

  const startCounter = () => {
    counter.style.display = "inline";
    counter.innerHTML = time;
    interval = setInterval(() => {
      time--;
      counter.innerHTML = time;
      if (time === 0) {
        clearInterval(interval);
        counter.style.display = "none";
        time = 3;
        setNewQuestion();
      }
    }, 1000);
  };

  const generateBinary = () => {
    const binary = Math.floor(Math.random() * 2);
    const binary1 = Math.floor(Math.random() * 2);
    const binary2 = Math.floor(Math.random() * 2);
    const binary3 = Math.floor(Math.random() * 2);
    return [binary, binary1, binary2, binary3];
  };

  const setNewQuestion = () => {
    const binaryQuestion = generateBinary()
      .join(",")
      .toString()
      .replaceAll(",", "");
    question[0].innerHTML = binaryQuestion;
  };

  form.addEventListener("submit", (e) => {
    e.preventDefault();

    const inputUser = input.value.toUpperCase();
    input.value = "";

    const binaryQuestion = question[0].innerHTML;
    const hexQuestion = parseInt(binaryQuestion, 2).toString(16).toUpperCase(); // Convertir la question binaire en hexadécimal

    if (inputUser === hexQuestion) {
      answer.innerHTML = "Correct!";
      startCounter();
    } else {
      answer.innerHTML = "Incorrect. The correct answer is " + hexQuestion;
    }
  });

  setNewQuestion();
  counter.style.display = "none";
});
