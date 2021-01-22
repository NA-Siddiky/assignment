function megaFriend(names) {
    var count = 0;
    var longest_name;
    for (var i = 0; i < names.length; i++) {
        if (names[i].length > count) {
            var count = names[i].length;
            longest_name = names[i];
        }
    }
    return longest_name;        // Return the largest name of the friend /
}

var names = ["anik", "tuhin", "sid", "Siddiky", "Abdul", "jobber",];
var mega = megaFriend(names)
console.log(mega);