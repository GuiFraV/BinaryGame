document.addEventListener("DOMContentLoaded", () => {
  const answer = document.querySelectorAll("p");
  const question = document.querySelectorAll("h1");

  const generateBinary = () => {
    const binary = Math.floor(Math.random() * 2);
    const binary1 = Math.floor(Math.random() * 2);
    const binary2 = Math.floor(Math.random() * 2);
    const binary3 = Math.floor(Math.random() * 2);
    return [binary, binary1, binary2, binary3];
  };

  console.log(generateBinary().join(",").toString());
  question[0].innerHTML = generateBinary()
    .join(",")
    .toString.replaceAll(",", "");
});
