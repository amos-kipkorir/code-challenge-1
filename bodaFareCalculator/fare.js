function calculateBodaFare() {
    // Prompt the user for the distance
    let input = prompt("Unafika wapi Mkubwa? Kilometer ngapi?:");
  
    // Convert the input to a number
    let distanceInKm = parseFloat(input);
  
    // Validate the input
    if (isNaN(distanceInKm) || distanceInKm <= 0) {
      console.log("Tafadhali ingiza nambari sahihi ya kilomita (greater than 0).");
      return;
    }
  
    // Fare calculation parameters
    let baseFare = 50;          // Base fare in KES
    let chargePerKm = 15;       // Cost per kilometer in KES
  
    // Calculate fare
    let distanceFare = distanceInKm * chargePerKm;
    let totalFare = baseFare + distanceFare;
  
    // Print result in a friendly format
    console.log(`Uko kwote? Io ni ${distanceInKm} km:`);
    console.log(`Ukikalia Pikipiki: KES ${baseFare}`);
    console.log(`Mpaka Uko: KES ${distanceFare}`);
    console.log(`Total: KES ${totalFare}\n`);
    console.log("Panda Pikipiki!");
  }
  
  // Call the function
  calculateBodaFare();
  