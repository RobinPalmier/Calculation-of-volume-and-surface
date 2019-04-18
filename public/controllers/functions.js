// Function qui test si une chaine est un nombre :
let isFloat = value => {
    if (/^(\-|\+)?([0-9]+(\.[0-9]+)?)$/
        .test(value))
        return Number(value);
    return NaN;
}

// Exports :
exports.isFloat = isFloat;