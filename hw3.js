function doCalcPositive(start, end, step)
{
    if (end < start) {
        document.getElementById("error").hidden=false;
    } else {
        let idx = 0;
        let sum = 0;
        let values = [];
        while (start <= end) {
            values[idx] = start;
            sum += start;
            start += step;
            idx++;
        }
        document.getElementById("array").innerHTML = "The generated array is " + values;
        document.getElementById("sum").innerHTML = "The sum is " + sum;
        idx = 0;
        while (idx < values.length) {
            values[idx] = (values[idx]).toString(2);
            idx++;
        }
        document.getElementById("binary").innerHTML = "The binary of absolut element values are: " + values;
        document.getElementById("results").hidden=false;
    }
}

function doCalcNegative(start, end, step)
{
    if (end > start) {
        document.getElementById("error").hidden=false;
    } else {
        let idx = 0;
        let sum = 0;
        let values = [];
        while (start >= end) {
            values[idx] = start;
            sum += start;
            start += step;
            idx++;
        }
        document.getElementById("array").innerHTML = "The generated array is " + values;
        document.getElementById("sum").innerHTML = "The sum is " + sum;
        idx = 0;
        while (idx < values.length) {
            values[idx] = (values[idx]).toString(2);
            idx++;
        }
        document.getElementById("binary").innerHTML = "The binary of absolut element values are: " + values;
        document.getElementById("results").hidden=false;
    }
}

document.getElementById("error").hidden=true;
document.getElementById("results").hidden=true;
let start = prompt("Enter the start:");
if (isNaN(start) || start === null || start === undefined || start.length === 0) {
    document.getElementById("error").hidden=false;
} else {
    start = start * 1;
    let end = prompt("Enter the end:");
    if (isNaN(end) || end === null || end === undefined || end.length === 0) {
        document.getElementById("error").hidden=false;
    } else {
        end = end * 1;
        let step = prompt("Enter the step:");
        if (isNaN(step) || step === null || step === undefined || step.length === 0) {
            document.getElementById("error").hidden=false;
        } else {
            step = step * 1;
            if (step > 0) {
                doCalcPositive(start, end, step);
            } else if (step < 0) {
                doCalcNegative(start, end, step);
            } else {
                document.getElementById("error").hidden=false;
            }
        }
    }
}