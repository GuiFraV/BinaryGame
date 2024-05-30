document.addEventListener("DOMContentLoaded", () => {
  const question = document.querySelectorAll("h1");
  const form = document.querySelector("form");
  const input = document.querySelector("input");
  const answer = document.querySelector("p");

  form.addEventListener("submit", (e) => {
    e.preventDefault();

    const inputUser = input.value.toUpperCase();
    input.value = "";

    const binaryQuestion = question[0].innerHTML;
    const hexQuestion = parseInt(binaryQuestion, 2).toString(16).toUpperCase();

    if (inputUser === hexQuestion) {
      answer.innerHTML = "Correct!";
    } else {
      answer.innerHTML = "Incorrect. The correct answer is " + hexQuestion;
    }
  });

  const generateBinary = () => {
    const binary = Math.floor(Math.random() * 2);
    const binary1 = Math.floor(Math.random() * 2);
    const binary2 = Math.floor(Math.random() * 2);
    const binary3 = Math.floor(Math.random() * 2);
    return [binary, binary1, binary2, binary3];
  };

  const binaryQuestion = generateBinary()
    .join(",")
    .toString()
    .replaceAll(",", "");

  question[0].innerHTML = binaryQuestion;
});
