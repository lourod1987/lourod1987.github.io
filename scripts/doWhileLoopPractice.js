var i = 567;
var reps = 0;

if (i <= 567) {
    do {
        ++reps;
        console.log(reps + " reps gives us " + i);
        i *= 2.1;
    } while (i < 567);
} else {
    console.log("i is bigger than 567.")
}