"use strict";
// i had a previous test log of my name before that still shows up as madison
var myName = 'nosidam';
console.log(myName);
var diceContainer = document.getElementById("dice-container");
var getButton = document.getElementById("get-button");
var rollButton = document.getElementById("refresh-dice");
var sumButton = document.getElementById("sum-dice");
var dieArr = [];
var counter = 0;
var Die = /** @class */ (function () {
    function Die() {
        this.div = document.createElement("div");
        this.value = counter;
        this.div.className = "dice-box";
        this.roll();
        this.createArr();
        this.removeDie();
        this.changeDieValue();
        diceContainer === null || diceContainer === void 0 ? void 0 : diceContainer.appendChild(this.div);
    }
    Die.prototype.roll = function () {
        counter = Math.floor(Math.random() * 6);
        counter++;
        this.value = counter;
        this.div.id = counter;
        this.div.innerText = this.value;
    };
    Die.prototype.createArr = function () {
        dieArr.push(this);
        console.log(dieArr);
    };
    Die.prototype.removeDie = function () {
        var _this = this;
        this.div.addEventListener("dblclick", function () {
            diceContainer === null || diceContainer === void 0 ? void 0 : diceContainer.removeChild(_this.div);
            dieArr.splice(dieArr.indexOf(_this), 1);
        });
    };
    Die.prototype.changeDieValue = function () {
        var _this = this;
        this.div.addEventListener("click", function () {
            counter = Math.floor(Math.random() * 6);
            counter++;
            _this.value = counter;
            _this.div.id = counter;
            _this.div.innerText = _this.value;
        });
    };
    return Die;
}());
getButton === null || getButton === void 0 ? void 0 : getButton.addEventListener("click", function () {
    var die = new Die();
    die.roll();
});
rollButton === null || rollButton === void 0 ? void 0 : rollButton.addEventListener("click", function () {
    for (var index = 0; index < dieArr.length; index++) {
        dieArr[index].roll();
    }
});
sumButton === null || sumButton === void 0 ? void 0 : sumButton.addEventListener("click", function () {
    function getSum() {
        var sum = 0;
        for (var i = 0; i < dieArr.length; i++) {
            sum += dieArr[i].value;
        }
        alert(sum);
    }
    getSum();
});
