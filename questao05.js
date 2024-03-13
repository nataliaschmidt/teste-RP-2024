// 5) Escreva um programa que inverta os caracteres de um string

const reverseString = (string) => {
  let newString = '';

  for (let i = string.length - 1; i >= 0; i--) {
    newString += string[i];
  }

  return newString;
};

// console.log(reverseString("teste"));
// console.log(reverseString("uma frase grande"));