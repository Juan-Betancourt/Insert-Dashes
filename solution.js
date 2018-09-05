function insertDash(num) {
    let result = [];
    var num = num.toString().split("");
    for (j = 0; j < num.length; j++) {
        let currentNum = num[j];
        let nextNum = num[j + 1];
        if (currentNum % 2 === 1 && nextNum % 2 === 1) {
            result.push(num[j] + '-');
        } else {
            result.push(num[j]);
        }
    }
    return (result.join(''))
}