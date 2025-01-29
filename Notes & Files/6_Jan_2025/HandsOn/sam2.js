function calculateCandies(totalCandies) {
    let samCandies = totalCandies / 2 + totalCandies / 4;
    console.log("Sam:", samCandies, "candies");
    console.log("Angel:", totalCandies - samCandies, "candies");
}

calculateCandies(75);
