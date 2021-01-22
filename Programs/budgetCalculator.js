function budgetCalculator(watch, phone, laptop) {
    var input = "Invalid input";
    if ((watch, phone, laptop) < 0) {
        return (input);
    }
    var watch = (watch * 50);
    var phone = (phone * 100);
    var laptop = (laptop * 500);
    var total = (watch + phone + laptop);
    return total;
}

var result = budgetCalculator(0, 0, -1);
console.log(result);