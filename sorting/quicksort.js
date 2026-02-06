import { array, sleep, container } from "../script.js";

export async function quickSort() {
    await quickSortRecursive(0, array.length - 1);
}


async function quickSortRecursive(low, high) {
    if (low < high ) {
        let pi = await partition(low, high);
        await quickSortRecursive(low, pi - 1);
        await quickSortRecursive(pi + 1, high);
    }
}

async function partition(low, high) {
    const bars = container.children;
    let pivot = array[high];
    let i = low - 1;


    for (let j = low; j < high; j++){
        bars[j].style.background = "orange";

        await sleep(20);

        if (array[j] < pivot ) {
            i++;
            [array[i], array[j]] = [array[j], array[i]];
            bars[i].style.height = `${array[i]}px`;
            bars[j].style.height = `${array[j]}px`;
        }

        bars[j].style.background = "steelblue";
    }

    [array[i + 1], array[high]] = [array[high], array[i + 1]];
    bars[i + 1].style.height = `${array[i + 1]}px`;
    bars[high].style.height = `${array[high]}px`;

    return i + 1;
}