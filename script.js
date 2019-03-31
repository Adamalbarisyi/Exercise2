function tambah() {
    document.calculator.display.value += "+";
    document.calculator.display.style.textAlign = "right";
}

function kurang() {
    document.calculator.display.value += '-';
    document.calculator.display.style.textAlign = "right";
}

function kali() {
    document.calculator.display.value += '*';
    document.calculator.display.style.textAlign = "right";
}
function bagi() {
    document.calculator.display.value += '/';
    document.calculator.display.style.textAlign = "right";
}

function hapus() {
    document.calculator.display.value = "";
    document.calculator.display.style.textAlign = "right";
            }

function hasil() {
    document.calculator.display.value = eval(calculator.display.value);
    document.calculator.display.style.textAlign = "right";
}
 function btndot() {
                document.calculator.display.value += ".";
                document.calculator.display.style.textAlign = "right";
            }