let x = function (num) {
    let count = 0;

    while (num >= 10) {
        num1 = num % 10;
        num2 = num % 100;
        num = num1 * num2;
        count++;
    }
    return count;
}
document.write(x(23));