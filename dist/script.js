function appendToResult(value) {
    document.getElementById('result').value += value;
}

function clearResult() {
    document.getElementById('result').value = '';
}

function deleteLastCharacter() {
    var result = document.getElementById('result').value;
    document.getElementById('result').value = result.slice(0, -1);
}

function calculateResult() {
    try {
        var result = document.getElementById('result').value;
        var calculatedResult = eval(result);
        if (isNaN(calculatedResult) || !isFinite(calculatedResult)) {
            throw "Error";
        }
        document.getElementById('result').value = calculatedResult;
    } catch (error) {
        document.getElementById('result').value = "Error";
    }
}