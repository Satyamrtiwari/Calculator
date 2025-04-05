function appendValue(value) {
    document.getElementById("display").value += value;
}

function clearDisplay() {
    document.getElementById("display").value = "";
}

function calculate() {
    try {
        document.getElementById("display").value = eval(document.getElementById("display").value);
    } catch (error) {
        document.getElementById("display").value = "Error";
    }
}

// Keyboard Support
document.addEventListener("keydown", function(event) {
    let key = event.key;
    if (!isNaN(key) || "+-*/().".includes(key)) {
        appendValue(key);
    } else if (key === "Enter") {
        calculate();
    } else if (key === "Backspace") {
        let display = document.getElementById("display");
        display.value = display.value.slice(0, -1);
    } else if (key === "Escape") {
        clearDisplay();
    }
});
