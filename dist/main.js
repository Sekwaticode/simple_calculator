/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./script.js":
/*!*******************!*\
  !*** ./script.js ***!
  \*******************/
/***/ (() => {

eval("class Calculator {\r\n  constructor(previousOperandTextElement, currentOperandTextElement) {\r\n    this.previousOperandTextElement = previousOperandTextElement;\r\n    this.currentOperandTextElement = currentOperandTextElement;\r\n    this.clear();\r\n  }\r\n\r\n  clear() {\r\n    this.currentOperand = \"\";\r\n    this.previousOperand = \"\";\r\n    this.operation = undefined;\r\n  }\r\n\r\n  delete() {\r\n    this.currentOperand = this.currentOperand\r\n      .toString()\r\n      .slice(0, this.currentOperand.length - 1);\r\n  }\r\n\r\n  appendNumber(number) {\r\n    if (number === \".\" && this.currentOperand.includes(\".\")) return;\r\n    this.currentOperand = this.currentOperand.toString() + number.toString();\r\n  }\r\n\r\n  chooseOperation(operation) {\r\n    if (this.currentOperand === \"\") return;\r\n    if (this.previousOperand !== \"\") {\r\n      this.compute();\r\n    }\r\n    this.operation = operation;\r\n    this.previousOperand = this.currentOperand;\r\n    this.currentOperand = \"\";\r\n  }\r\n\r\n  compute() {\r\n    let computation;\r\n    const prev = parseFloat(this.previousOperand);\r\n    const current = parseFloat(this.currentOperand);\r\n    if (isNaN(prev) || isNaN(current)) return;\r\n    switch (this.operation) {\r\n      case \"+\":\r\n        computation = prev + current;\r\n        break;\r\n      case \"-\":\r\n        computation = prev - current;\r\n        break;\r\n      case \"*\":\r\n        computation = prev * current;\r\n        break;\r\n      case \"/\":\r\n        computation = prev / current;\r\n        break;\r\n      default:\r\n        return;\r\n    }\r\n\r\n    this.currentOperand = computation;\r\n    this.operation = undefined;\r\n    this.previousOperand = \"\";\r\n  }\r\n\r\n  getDisplayNumber(number) {\r\n    const toStringNumber = number.toString();\r\n    const integerDigits = parseFloat(toStringNumber.split(\".\")[0]);\r\n    const decimalDigits = toStringNumber.split(\".\")[1];\r\n    let integerDisplay;\r\n    if (isNaN(integerDigits)) {\r\n      integerDisplay = \"\";\r\n    } else {\r\n      integerDisplay = integerDigits.toLocaleString(\"en\", {\r\n        maximumFractionDigits: 0\r\n      });\r\n    }\r\n    if (decimalDigits != null) {\r\n      return `${integerDisplay}.${decimalDigits}`;\r\n    } else {\r\n      return integerDisplay;\r\n    }\r\n  }\r\n\r\n  updateDisplay() {\r\n\r\n    this.currentOperandTextElement.innerText = this.getDisplayNumber(\r\n      this.currentOperand\r\n    );\r\n    if (this.operation !== null || this.operation !== undefined) {\r\n      this.previousOperandTextElement.innerText =\r\n       `${this.getDisplayNumber( this.previousOperand)} ${this.operation}`;\r\n    } else {\r\n      this.previousOperandTextElement.innerText = '';\r\n    }\r\n  }\r\n}\r\n\r\nconst numberButtons = document.querySelectorAll(\"[data-number]\");\r\nconst operationsButtons = document.querySelectorAll(\"[data-operation]\");\r\nconst equalsButton = document.querySelector(\"[data-equals]\");\r\nconst deleteButton = document.querySelector(\"[data-delete]\");\r\nconst allClearButton = document.querySelector(\"[data-all-clear]\");\r\nconst previousOperandTextElement = document.querySelector(\r\n  \"[data-previous-operand]\"\r\n);\r\nconst currentOperandTextElement = document.querySelector(\r\n  \"[data-current-operand]\"\r\n);\r\n\r\nconst calculator = new Calculator(\r\n  previousOperandTextElement,\r\n  currentOperandTextElement\r\n);\r\n\r\nnumberButtons.forEach((button) => {\r\n  button.addEventListener(\"click\", () => {\r\n    calculator.appendNumber(button.innerText);\r\n    calculator.updateDisplay();\r\n  });\r\n});\r\n\r\noperationsButtons.forEach((button) => {\r\n  button.addEventListener(\"click\", () => {\r\n    calculator.chooseOperation(button.innerText);\r\n    calculator.updateDisplay();\r\n  });\r\n});\r\n\r\nequalsButton.addEventListener(\"click\", (button) => {\r\n  calculator.compute();\r\n  calculator.updateDisplay();\r\n});\r\n\r\nallClearButton.addEventListener(\"click\", (button) => {\r\n  calculator.clear();\r\n  calculator.updateDisplay();\r\n});\r\n\r\ndeleteButton.addEventListener(\"click\", (button) => {\r\n  calculator.delete();\r\n  calculator.updateDisplay();\r\n});\r\n\n\n//# sourceURL=webpack://simple_calculator/./script.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./script.js"]();
/******/ 	
/******/ })()
;