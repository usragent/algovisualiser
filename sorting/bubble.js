import { array, sleep, container } from "../script.js";


export async function bubbleSort() {
    const bars = container.children;


    for (let i = 0; i < array.length; i++) {
    for (let j = 0; j < array.length - i - 1; j++)  {

            bars[j].style.background = "red";
            bars[j + 1].style.background = "red";

            await sleep(20);

            if (array[j] > array[j + 1]) {
                [array[j], array[j + 1] = [array[j + 1], array[j]]];
                bars[j].style.height = `${array[j]}px`;
                bars[j + 1].style.height = `${array[j + 1]}px`;
            }

            bars[j].style.background = "steelblue";
            bars[j + 1].style.background = "steelblue";
        }
    }
}