const reverseString = function(input) {
    let len = input.length
    let reverse = ""

    if (len) {
        for (let index = input.length-1; index >= 0; index--) {
            reverse = reverse + input[index]
        }


        return reverse
    }

    return ""
};

// Do not edit below this line
module.exports = reverseString;
