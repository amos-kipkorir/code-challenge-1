function estimateTransactionFee() {
    // Prompt the user for the amount to send
    const input = prompt("Unatuma Ngapi? (KES):");
  
    // Convert input to a number
    const amountToSend = parseFloat(input);
  
    // Validate input
    if (isNaN(amountToSend) || amountToSend <= 0) {
      console.log("Tafadhali andika kiasi sahihi (greater than 0).");
      return;
    }
  
    // Fee calculation parameters
    const feePercentage = 0.015;  // 1.5%
    const minFee = 10;
    const maxFee = 70;
  
    // Calculate raw fee and apply bounds
    let calculatedFee = amountToSend * feePercentage;
    if (calculatedFee < minFee) {
      calculatedFee = minFee;
    } else if (calculatedFee > maxFee) {
      calculatedFee = maxFee;
    }
  
    // Calculate total amount to be debited
    const totalDebited = amountToSend + calculatedFee;
  
    // Print result
    console.log(`Sending KES ${amountToSend}:`);
    console.log(`Calculated Transaction Fee: KES ${calculatedFee}`);
    console.log(`Total amount to be debited: KES ${totalDebited}\n`);
    console.log("Send Money Securely!");
  }
  
  // Call the function
  estimateTransactionFee();
  