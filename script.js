document.addEventListener("DOMContentLoaded", () => {
  const answer = document.querySelectorAll("p");
  const question = document.querySelectorAll("h1");
  const form = document.querySelector("form");
  const input = document.querySelector("input");

  const checkAnswer = {
    0: "0000",
    1: "0001",
    2: "0010",
    3: "0011",
    4: "0100",
    5: "0101",
    6: "0110",
    7: "0111",
    8: "1000",
    9: "1001",
    A: "1010",
    B: "1011",
    C: "1100",
    D: "1101",
    E: "1110",
    F: "1111",
  };

  form.addEventListener("submit", (e) => {
    e.preventDefault();

    const inputUser = input.value;

    input.value = "";

    console.log(inputUser);
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
