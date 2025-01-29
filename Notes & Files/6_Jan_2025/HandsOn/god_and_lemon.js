function lemons_and_gods(lemon_in_hands) {
    const lemons_per_god = 7;
    const gods = 3;
    let shortage = 0;
    let surplus = 0;

    for (let i = 1; i <= gods; i++) {
        if (lemon_in_hands >= lemons_per_god) {
            console.log("God" + i + ": " + lemons_per_god + " offered");
            lemon_in_hands -= lemons_per_god;
        } else {
            if (lemon_in_hands > 0) {
                console.log("God" + i + ": Having " + lemon_in_hands + " and need " + (lemons_per_god - lemon_in_hands));
                shortage += (lemons_per_god - lemon_in_hands);
                lemon_in_hands = 0;
            } else {
                console.log("God" + i + ": Need " + lemons_per_god);
                shortage += lemons_per_god;
            }
        }
    }

    if (lemon_in_hands > 0) {
        surplus = lemon_in_hands;
        console.log("Surplus: " + surplus);
    } else if (shortage > 0) {
        console.log("Shortage: " + shortage);
    } else {
        console.log("Sufficient");
    }
}

// Input
var lemon_in_hands = parseInt(prompt("Enter the lemons count: "), 10); // Convert input to integer
lemons_and_gods(lemon_in_hands);
