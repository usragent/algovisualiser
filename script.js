import { bubbleSort } from "./sorting/bubble.js";
import { quickSort } from "./sorting/quicksort.js";
import { mergeSort } from "./sorting/mergesort.js";


export let array = [];
export const container = document.getElementById("array-container");

export function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}


export function generateArray(size = 60) {
  container.innerHTML = "";
  array = [];

  for (let i = 0; i < size; i++) {
    let value = Math.floor(Math.random() * 300) + 20;
    array.push(value);

    const bar = document.createElement("div");
    bar.classList.add("bar");
    bar.style.height = `${value}px`;
    container.appendChild(bar);
  }
}

document.getElementById("generate").onclick = () => generateArray();
document.getElementById("bubble").onclick = () => bubbleSort();
document.getElementById("quick").onclick = () => quickSort();
document.getElementById("merge").onclick = () => mergeSort();

generateArray();