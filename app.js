function getNum(num) {
    console.log(num)
    document.getElementById('result').value += num;
}

function clearScr() {
    document.getElementById('result').value = "";

}

function removeNum() {
    var res = document.getElementById('result').value;
    document.getElementById('result').value = document.getElementById('result').value.slice(0, res.length - 1);
}

function getAns() {
    document.getElementById('result').value = eval(document.getElementById('result').value)
    console.log(document.getElementById('result').value);
}


function Exp() {
    document.getElementById('result').value = eval(Math.Exp * document.getElementById('result').value);
}

function sqrt2() {
    var sqrt2 = document.getElementById('result').value * document.getElementById('result').value
    document.getElementById('result').value = sqrt2;
}

function log2() {
    document.getElementById('result').value = eval(Math.log2(document.getElementById('result').value));
}

function pi() {
    document.getElementById('result').value = eval(Math.PI * document.getElementById('result').value);
}

function log10() {
    document.getElementById('result').value = eval(Math.log10(document.getElementById('result').value));
}

function mathsin() {
    document.getElementById('result').value = eval(Math.sin(document.getElementById('result').value));
}

function mathcos() {
    document.getElementById('result').value = eval(Math.cos(document.getElementById('result').value));
}
function mathtan() {
    document.getElementById('result').value = eval(Math.tan(document.getElementById('result').value));
}

function round() {
    document.getElementById('result').value = eval(Math.round(document.getElementById('result').value));
}
function sign() {
    document.getElementById('result').value = eval(Math.sign(document.getElementById('result').value));
} function ceil() {
    document.getElementById('result').value = eval(Math.ceil(document.getElementById('result').value));
}
function sqrt() {
    document.getElementById('result').value = eval(Math.sqrt(document.getElementById('result').value));
}



