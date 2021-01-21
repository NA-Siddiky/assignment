// https://github.com/NA-Siddiky/assignment /

function kilometerToMeter(kilometer) {
    var meter = kilometer * 1000;       // According to the Law of km to meeter conversion / 
    return meter;
}

function budgetCalculator(watch, phone, laptop) {
    var watch = (watch * 50);
    var phone = (phone * 100);
    var laptop = (laptop * 500);
    var total = (watch + phone + laptop);       //total budget for yours 3 item /
    return total;
}

function hotelCost(days) {
    var cost = 0;

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
        var rest_Of_Days = remaining * 50;      // costing is 50 for rest of days after 1-20 days /
        cost = first_10_Days + secound_20_Days + rest_Of_Days;
    }
    return cost;
}