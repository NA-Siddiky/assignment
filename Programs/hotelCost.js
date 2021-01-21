function hotelCost(days) {
    var cost = 0;

    if (days <= 10) {
        cost = days * 100;
    }
    else if (days <= 20) {
        var first_10_Days = 10 * 100;
        var remaining = days - 10;
        var secound_20_Days = remaining * 80;
        cost = first_10_Days + secound_20_Days;
    }
    else {
        var first_10_Days = 10 * 100;
        var secound_20_Days = 10 * 80;
        var remaining = days - 20;
        var rest_Of_Days = remaining * 50;
        cost = first_10_Days + secound_20_Days + rest_Of_Days;
    }
    return cost;
}
var total_cost = hotelCost(100);
console.log(total_cost);