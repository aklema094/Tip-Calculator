let button = document.getElementById("calculate"); 
let bill = document.getElementById("bill"); 
let tip = document.getElementById("tip"); 
let total = document.getElementById("total");  

function calculateTotal() {
    // Convert input values to numbers
    const billAmount = bill.value;
    const tipPercentage = tip.value;

    // Calculate total amount
    const result = billAmount * (1 + tipPercentage / 100);

    // Display the result, formatted to 2 decimal places
    total.innerText = `Total: $${result.toFixed(2)}`;
}

button.addEventListener("click", calculateTotal);
