function runLengthEncoding(string) {
    let result = '';
    let maxValue = 9;
    if (string.length > 0) {
        let count = 1;
        let value = string[0];
        for (let i = 1; i < string.length; ++i) {
            var entry = string[i];
            if (entry == value && count < 9) {
                count += 1;
            } else {
                result += count + '' + value;
                count = 1;
                value = entry;
            }
        }
        result += count + '' + entry;
    }
    return result;
}

runLengthEncoding(string);

// Merci de ne pas effacer la ligne en dessous.

exports.runLengthEncoding = runLengthEncoding;
