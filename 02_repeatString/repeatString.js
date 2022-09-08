const repeatString = function(rep, times) {
    
    if (times == 0) {
        return ""
    }

    if (times < 0) {
        return "ERROR"
    }
    
    let print = rep
    for (let index = 0; index < times-1; index++) {
        print = print + rep
    }

    return print
};

// Do not edit below this line
module.exports = repeatString;
