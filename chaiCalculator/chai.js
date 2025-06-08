function calculateChaiIngredients() {
    // Prompt user for the number of cups
    const input = prompt("Karibu! How many cups of Chai Bora would you like to make?");
    
    // Convert the input to a number
    const numberOfCups = parseInt(input);
  
    // Validate the input
    if (isNaN(numberOfCups) || numberOfCups <= 0) {
      console.log("Please enter a valid number of cups greater than 0.");
      return;
    }
  
    // Define standard recipe amounts per cup
    const waterPerCup = 200;      // ml
    const milkPerCup = 50;        // ml
    const teaLeavesPerCup = 1;    // tablespoons
    const sugarPerCup = 2;        // teaspoons
  
    // Calculate total ingredients
    const totalWater = waterPerCup * numberOfCups;
    const totalMilk = milkPerCup * numberOfCups;
    const totalTeaLeaves = teaLeavesPerCup * numberOfCups;
    const totalSugar = sugarPerCup * numberOfCups;
  
    // Print the results
    console.log(`To make ${numberOfCups} cup(s) of Kenyan Chai, you will need:`);
    console.log(`Water: ${totalWater} ml`);
    console.log(`Milk: ${totalMilk} ml`);
    console.log(`Tea Leaves (Majani): ${totalTeaLeaves} tablespoon(s)`);
    console.log(`Sugar (Sukari): ${totalSugar} teaspoon(s)\n`);
    console.log("Enjoy your Chai Bora!");
  }
  
  // Call the function
  calculateChaiIngredients();
  