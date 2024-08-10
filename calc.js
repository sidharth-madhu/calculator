
// 1. dsiplay number in text box``

function displayNumber(num) {
    result.value += num;
}


// 2. clear text box

function clearBox() {
    result.value = ""
}

// 3. evaluate expression

function evaluateexp() {
    result.value = eval(result.value)
}  


// 4. backspace
function removelastitem() {
    result.value = result.value.slice(0, -1);
}