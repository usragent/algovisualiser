import { array, sleep, container } from "../script.js";

export async function mergeSort() {
    await mergeSortRecursive(0, array.length - 1);
}

async function mergeSortRecursive(left, right) {
    if (left >= right) return;


    let mid = Math.floor((left + right) / 2);
    await mergeSortRecursive(left, mid);
    await mergeSortRecursive(mid + 1, right);
    await merge(left, mid, right);
}

async function merge(left, mid, right) {
    const bars = container.children;


    let temp = [];
    let i = left;
    let j = mid + 1;

    while (i <= mid && j <= right) {
        if (array[i] < array[j]) {
            temp.push(array[i++]);
        } else {
            temp.push(array[j++]);
        }
    }

    while (i <= mid) temp.push(array[i++]);
    while (j <= right) temp.push(array[j++]);


    for (let k = left; k <= right; k++) {
        array[k] = temp[k - left];
        bars[k].style.height = `${array[k]}px`;
        await sleep(20);
    }
}