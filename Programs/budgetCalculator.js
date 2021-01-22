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

var result = budgetCalculator(2, 4, 1);
console.log(result);