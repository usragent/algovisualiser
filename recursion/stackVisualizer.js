export async function visualizeFactorial(n, container, sleep) {
    container.innerHTML = "";
    await factorial(n);


    async function factorial(x) {
        pushFrame(`factorial(${x})`);
        await sleep(500);

        if (x <= 1) {
            popFrame();
            return 1;
        }

        let result = x * await factorial(x - 1);

        await sleep(500);
        popFrame();

        return result;
    }

    function pushFrame(text) {
        const frame = document.createElement("div");
        frame.classList.add("stack-frame");
        frame.innerText = text;
        container.appendChild(frame);
    }

    function popFrame() {
        container.removeChild(container.lastChild);
    }
}