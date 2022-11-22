// Characters for pwds
const characters = [
  "0",
  "1",
  "2",
  "3",
  "4",
  "5",
  "6",
  "7",
  "8",
  "9",
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
  "G",
  "H",
  "I",
  "J",
  "K",
  "L",
  "M",
  "N",
  "O",
  "P",
  "Q",
  "R",
  "S",
  "T",
  "U",
  "V",
  "W",
  "X",
  "Y",
  "Z",
  "!",
  "+",
  "^",
  "$",
  "#",
  "&",
  "<",
  ">",
  "?",
  "/",
];

// 0 - 9 numbers, 10 - 35 lower case, 36 - 61 upper case, 62 - 71 symbols

// Copy
let copy = document.getElementById("copy");

copy.addEventListener("click", () => {
  navigator.clipboard.writeText(document.getElementById("pwd").value);
});

// Random numbers
function getRandomNumber() {
  return Math.round(Math.random() * 71);
}

// Generate
let generate = document.getElementById("generate");

generate.addEventListener("click", () => {
  let max = document.getElementById("pwd-length").value;
  let generatedpwd = "";

  for (let i = 0; i < max; ) {
    let position = getRandomNumber();
    if (position <= 9) {
      generatedpwd += characters[position];
      i++;
    }
    if (
      position > 9 &&
      position <= 35 &&
      document.getElementById("lower").checked
    ) {
      generatedpwd += characters[position];
      i++;
    }
    if (
      position > 35 &&
      position <= 61 &&
      document.getElementById("upper").checked
    ) {
      generatedpwd += characters[position];
      i++;
    }
    if (
      position > 61 &&
      position <= 71 &&
      document.getElementById("symbols").checked
    ) {
      generatedpwd += characters[position];
      i++;
    }
  }

  let pwd = document.getElementById("pwd");
  pwd.value = generatedpwd;
});
