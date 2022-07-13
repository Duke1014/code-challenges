const romanValues = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000
}

var romanToInt = function(s) {
    let integer = 0
    for (let i = 0; i < s.length; i++) {
        if (s[i] === 'I' && s[i+1] === 'V') {
            integer += 4
            i++
        } else if (s[i] === 'I' && s[i+1] === 'X') {
            integer += 9
            i++
        } else if (s[i] === 'X' && s[i+1] === 'L') {
            integer += 40
            i++
        } else if (s[i] === 'X' && s[i+1] === 'C') {
            integer += 90
            i++
        } else if (s[i] === 'C' && s[i+1] === 'D') {
            integer += 400
            i++
        } else if (s[i] === 'C' && s[i+1] === 'M') {
            integer += 900
            i++
        } else {
            integer += romanValues[s[i]]
        }
    }
    return integer
};