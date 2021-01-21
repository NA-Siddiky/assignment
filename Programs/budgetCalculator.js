function budgetCalculator(watch, phone, laptop) {
    var watch = (watch * 50);
    var phone = (phone * 100);
    var laptop = (laptop * 500);
    var total = (watch + phone + laptop);
    return total;
}

var result = budgetCalculator(20, 5, 3);
console.log(result);