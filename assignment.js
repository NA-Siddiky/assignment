// https://github.com/NA-Siddiky/assignment 


function kilometerToMeter(kilometer) {
    var input = "Invalid input";
    if (kilometer < 0) {
        return (input);
    }
    var meter = kilometer * 1000;       // According to the Law of km to meeter conversion / 
    return meter;
}


function budgetCalculator(watch, phone, laptop) {
    var input = "Invalid input";
    if ((watch, phone, laptop) < 0) {
        return (input);
    }
    var watch = (watch * 50);
    var phone = (phone * 100);
    var laptop = (laptop * 500);
    var total = (watch + phone + laptop);       //total budget for yours 3 item /
    return total;
}


function hotelCost(days) {
    var cost = 0;
    var input = "Invalid input";
    if (days < 1) {
        return (input);
    }
    if (days <= 10) {
        cost = days * 100;      // costing is 100 for first 10 days /
    }
    else if (days <= 20) {
        var first_10_Days = 10 * 100;
        var remaining = days - 10;
        var secound_20_Days = remaining * 80;       // costing is 80 for 11-20 days /
        cost = first_10_Days + secound_20_Days;
    }
    else {
        var first_10_Days = 10 * 100;
        var secound_20_Days = 10 * 80;
        var remaining = days - 20;
        var rest_Of_Days = remaining * 50;          // costing is 50 for rest of days after 1-20 days /
        cost = first_10_Days + secound_20_Days + rest_Of_Days;
    }
    return cost;
}


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