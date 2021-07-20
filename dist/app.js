/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./app.ts":
/*!****************!*\
  !*** ./app.ts ***!
  \****************/
/***/ (() => {

eval("\n// i had a previous test log of my name before that still shows up as madison\nvar myName = 'nosidam';\nconsole.log(myName);\nvar diceContainer = document.getElementById(\"dice-container\");\nvar getButton = document.getElementById(\"get-button\");\nvar rollButton = document.getElementById(\"refresh-dice\");\nvar sumButton = document.getElementById(\"sum-dice\");\nvar dieArr = [];\nvar counter = 0;\nvar Die = /** @class */ (function () {\n    function Die() {\n        this.div = document.createElement(\"div\");\n        this.value = counter;\n        this.div.className = \"dice-box\";\n        this.roll();\n        this.createArr();\n        this.removeDie();\n        this.changeDieValue();\n        diceContainer === null || diceContainer === void 0 ? void 0 : diceContainer.appendChild(this.div);\n    }\n    Die.prototype.roll = function () {\n        counter = Math.floor(Math.random() * 6);\n        counter++;\n        this.value = counter;\n        this.div.id = counter;\n        this.div.innerText = this.value;\n    };\n    Die.prototype.createArr = function () {\n        dieArr.push(this);\n        console.log(dieArr);\n    };\n    Die.prototype.removeDie = function () {\n        var _this = this;\n        this.div.addEventListener(\"dblclick\", function () {\n            diceContainer === null || diceContainer === void 0 ? void 0 : diceContainer.removeChild(_this.div);\n            dieArr.splice(dieArr.indexOf(_this), 1);\n        });\n    };\n    Die.prototype.changeDieValue = function () {\n        var _this = this;\n        this.div.addEventListener(\"click\", function () {\n            counter = Math.floor(Math.random() * 6);\n            counter++;\n            _this.value = counter;\n            _this.div.id = counter;\n            _this.div.innerText = _this.value;\n        });\n    };\n    return Die;\n}());\ngetButton === null || getButton === void 0 ? void 0 : getButton.addEventListener(\"click\", function () {\n    var die = new Die();\n    die.roll();\n});\nrollButton === null || rollButton === void 0 ? void 0 : rollButton.addEventListener(\"click\", function () {\n    for (var index = 0; index < dieArr.length; index++) {\n        dieArr[index].roll();\n    }\n});\nsumButton === null || sumButton === void 0 ? void 0 : sumButton.addEventListener(\"click\", function () {\n    function getSum() {\n        var sum = 0;\n        for (var i = 0; i < dieArr.length; i++) {\n            sum += dieArr[i].value;\n        }\n        alert(sum);\n    }\n    getSum();\n});\n\n\n//# sourceURL=webpack://typescript-dicey-business/./app.ts?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./app.ts"]();
/******/ 	
/******/ })()
;