function calculateCandies() {
    let candies = 75;
    let samCandies = candies / 2 + candies / 4;
    let angelCandies = candies - samCandies;
    return { Sam: samCandies, Angel: angelCandies };
}

const result = calculateCandies();
console.log("Sam:", result.Sam, "candies");
console.log("Angel:", result.Angel, "candies");
