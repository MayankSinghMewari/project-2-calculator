let expression = "";

function appendToDisplay(value) {
    expression += value;
    document.getElementById("display").value = expression;
}

function clearDisplay() {
    expression = "";
    document.getElementById("display").value = "";
}

function calculateResult() {
    try {
        const result = eval(expression);
        document.getElementById("display").value = result;
        expression = result.toString();
    } catch (error) {
        document.getElementById("display").value = "Error";
        expression = "";
    }
}

function backspace() {
    expression = expression.slice(0, -1);
    document.getElementById("display").value = expression;
}

function calculateSquareRoot() {
    try {
        const result = Math.sqrt(eval(expression));
        document.getElementById("display").value = result;
        expression = result.toString();
    } catch (error) {
        document.getElementById("display").value = "Error";
        expression = "";
    }
}

function calculateSquare() {
    try {
        const result = Math.pow(eval(expression), 2);
        document.getElementById("display").value = result;
        expression = result.toString();
    } catch (error) {
        document.getElementById("display").value = "Error";
        expression = "";
    }
}

function deleteLastCharacter() {
    expression = expression.slice(0, -1);
    document.getElementById("display").value = expression;
}
