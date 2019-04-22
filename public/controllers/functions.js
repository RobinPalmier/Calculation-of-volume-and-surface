// Function qui test si une chaine est un nombre :
let isFloat = value => {
    if (/^(\-|\+)?([0-9]+(\.[0-9]+)?)$/
        .test(value))
        return Number(value);
    return NaN;
}

let recupFromDatabase = response => {
  return response;
}

// Exports :
exports.isFloat = isFloat;
exports.recupFromDatabase = recupFromDatabase;
