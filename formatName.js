function formatName(fullName) {
    var parts = fullName.split(" ");

    var first = parts[0];
    var last = parts[1];

    var capFirst = first.charAt(0).toUpperCase() + first.slice(1);
    var capLast = last.charAt(0).toUpperCase() + last.slice(1);

    return capFirst + " " + capLast;
}

module.exports = formatName;