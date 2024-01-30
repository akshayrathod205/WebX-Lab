import * as readlineSync from "readline-sync";

const getInput = (prompt: string): number => {
  const userInput = readlineSync.question(prompt);
  const parsedInput = parseFloat(userInput);

  if (isNaN(parsedInput)) {
    console.log("Invalid input");
    process.exit(1);
  }

  return parsedInput;
};

const performOperation = (): void => {
  const firstNum = getInput("Enter first number: ");
  const operation = readlineSync.question("Enter Operation: ");
  const secondNum = getInput("Enter second number: ");

  let result: number;

  switch (operation) {
    case "+":
      result = firstNum + secondNum;
      break;

    case "-":
      result = firstNum - secondNum;
      break;

    case "*":
      result = firstNum * secondNum;
      break;

    case "/":
      if (secondNum !== 0) {
        result = firstNum / secondNum;
      } else {
        console.log("Error: Cannot divide by 0");
        process.exit(1);
      }
      break;

    default:
      console.log("Invalid Operation");
      process.exit(1);
      break;
  }

  console.log(`Answer: ${result}`);
};

performOperation();
