let a = ""; // first num
let b = ""; // secont num
let sign = "" // знак операции 
let finish = false;

const digit = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "."];
const action = ["-", "+", "X", "/"];

// screen 
const out = document.querySelector(".calc-screen p");

function clearAll () {
    a = ""; //first number and result
    b = ""; //second number
    sign = ""; // знак
    finish = false;
    out.textContent = 0;
}

document.querySelector(".ac").onclick = clearAll;

document.querySelector(".buttons").onclick = (event) => {
    // нажата не кнопка 
    if(!event.target.classList.contains("btn")) return;
    //нажата кнопка ac
    if(event.target.classList.contains("ac")) return;

    out.textContent = "";
    
    // получаю нажатую кнопку 
    const key = event.target.textContent;

    // если нажата кнопка 0-9 или .
    if (digit.includes(key)) {
        if ( b === "" && sign === "") {
        a += key;
        out.textContent = a;
        } else if ( a !== "" && b !== "" && finish) {
            b = key;
            finish = false;
            out.textContent = b;
        }
        else {
            b += key;
            out.textContent = b;
        }
    }

    // если нажата кнопка + - / *
    if (action.includes(key)) {
        sign += key;
        out.textContent = sign;
        return;
    }

    // нажата =
    if ( key === "=") {
        if (b === "") b = a;
        switch (sign) {
            case "+":
                a = (+a) + (+b);
                break;
            case "-":
                a = a - b;
                break;
            case "X":
                a = a * b;
                break;
            case "/":
                if (b === "0") {
                    out.textContent = "Ошыбка";
                    a = "";
                    b = "";
                    sign = "";
                    return;
                }
                a = a / b;
                break;
        }
        finish = true;
        out.textContent = a;
        sign = "";
        console.log(a,b,sign);
    }


    // %
    if ( key === "%") {
        if ( a !== "" && b === "") {
            a = a / 100;
            out.textContent = a;
            console.log(a, b, sign)
        } 
    } 

    // нажата +/-
    // if ( key === "+/-" && out === 0) {
    //     a = "-";
    //     out.textContent = a;

    // } 

}