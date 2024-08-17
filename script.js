const inputField = document.getElementById('numberInput');
const message = document.getElementById('message');

inputField.addEventListener('input', () => {
    const number = parseInt(inputField.value);

    if (isNaN(number)) {
        message.textContent = "";
        return;
    }

    if (number < 0) {
        message.textContent = "Enter a positive value";
    } else {
        const isEven = number % 2 === 0;
        const nextNumbers = [number + 2, number + 4, number + 6];
        const type = isEven ? "even" : "odd";
        message.textContent = `Next 3 ${type} numbers: ${nextNumbers.join(', ')}`;
    }
});
