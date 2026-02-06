import { bubbleSort } from "./sorting/bubble.js";



let array = [];
const container = document.getElementById("array-container");

function generateArray() {
  container.innerHTML = "";
  array = [];

  for (let i = 0; i < 50; i++) {
    let value = Math.floor(Math.random() * 300) + 10;
    array.push(value);

    const bar = document.createElement("div");
    bar.classList.add("bar");
    bar.style.height = `${value}px`;
    container.appendChild(bar);
  }
}

function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

async function bubbleSort() {
  const bars = document.getElementsByClassName("bar");

  for (let i = 0; i < array.length; i++) {
    for (let j = 0; j < array.length - i - 1; j++) {

      bars[j].style.background = "red";
      bars[j+1].style.background = "red";

      await sleep(50);

      if (array[j] > array[j+1]) {
        [array[j], array[j+1]] = [array[j+1], array[j]];

        bars[j].style.height = `${array[j]}px`;
        bars[j+1].style.height = `${array[j+1]}px`;
      }

      bars[j].style.background = "steelblue";
      bars[j+1].style.background = "steelblue";
    }
  }
}
