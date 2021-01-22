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
var total_cost = hotelCost(30);
console.log(total_cost);