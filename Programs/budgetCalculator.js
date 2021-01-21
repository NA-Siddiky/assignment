function budgetCalculator(watch, phone, laptop) {
    var watch = (watch * 50);
    var phone = (phone * 100);
    var laptop = (laptop * 500);
    var total = (watch + phone + laptop);       //total budget for yours 3 item /
    return total;
}

var result = budgetCalculator(20, 10, 2); 
console.log(result);