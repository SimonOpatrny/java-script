function clearDisplay() {
    document.getElementById('display').value = '0';
}

function appendValue(value) {
    document.getElementById('display').value += value;
}
function calculateResult() {
    let expression = document.getElementById('display').value;
    document.getElementById('display').value = eval(expression);
}