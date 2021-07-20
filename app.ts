let myName: string = 'nosidam';
console.log(myName);


let diceContainer = document.getElementById("dice-container");
let getButton = document.getElementById("get-button");
let rollButton = document.getElementById("refresh-dice");
let sumButton = document.getElementById("sum-dice");
let dieArr: any[]= [];
let counter: number = 0;


class Die {
    div: any;
    value: number;
    
  constructor() {
      
    this.div = document.createElement("div");
    this.value = counter;
    this.div.className = "dice-box";
    this.roll();
    this.createArr();
    this.removeDie();
    this.changeDieValue();
    diceContainer?.appendChild(this.div);
  }

  roll() {
    counter = Math.floor(Math.random() * 6);
    counter++;
    this.value = counter;
    this.div.id = counter;
    this.div.innerText = this.value;
  }

  createArr() {
    dieArr.push(this);
    console.log(dieArr);
  }
  removeDie() {
    this.div.addEventListener("dblclick", () => {
      diceContainer?.removeChild(this.div)
      dieArr.splice(dieArr.indexOf(this), 1);
  
    });
  }
  changeDieValue() {
    this.div.addEventListener("click", () => {
    counter = Math.floor(Math.random() * 6);
    counter++;
    this.value = counter;
    this.div.id = counter;
    this.div.innerText = this.value;
  });
  }
  
}

getButton?.addEventListener("click", () => {
  let die = new Die();
  die.roll();
});

rollButton?.addEventListener("click", () => {
  for (let index = 0; index < dieArr.length; index++) {
    dieArr[index].roll();
  }
});

sumButton?.addEventListener("click", () => {
  function getSum() {
    let sum = 0;
    for (let i = 0; i < dieArr.length; i++) {
      sum += dieArr[i].value;
    }
    alert(sum);
  }
  getSum();
});
