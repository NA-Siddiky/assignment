function kilometerToMeter(kilometer) {
    var input = "Invalid input";
    if (kilometer < 0) {
        return (input);
    }
    var meter = kilometer * 1000;       // According to the Law of km to meeter conversion / 
    return meter;
}

var measure = kilometerToMeter(1);
console.log(measure);