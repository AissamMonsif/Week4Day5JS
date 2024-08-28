document.querySelector(".calculate-btn").addEventListener("click", function () {
  let amount = parseFloat(document.getElementById("amount").value);
  let term = parseFloat(document.getElementById("term").value);
  let rate = parseFloat(document.getElementById("rate").value) / 100;
  let type = document.querySelector('input[name="mortgageType"]:checked').value;

  let monthlyPayment, totalRepayment;

  if (type === "repayment") {
    let monthlyRate = rate / 12;
    let numberOfPayments = term * 12;
    monthlyPayment =
      (amount * (monthlyRate * Math.pow(1 + monthlyRate, numberOfPayments))) /
      (Math.pow(1 + monthlyRate, numberOfPayments) - 1);
    totalRepayment = monthlyPayment * numberOfPayments;

    document.getElementById(
      "monthly-repayment"
    ).textContent = `£${monthlyPayment.toFixed(2)}`;
    document.getElementById(
      "total-repayment-amount"
    ).textContent = `£${totalRepayment.toFixed(2)}`;

    document.getElementById("total-repayment").style.display = "block";
    document.getElementById("total-repayment-amount").style.display = "block";
  } else {
    monthlyPayment = (amount * rate) / 12;
    let numberOfPayments = term * 12;
    totalRepayment = monthlyPayment * numberOfPayments;

    document.getElementById(
      "monthly-repayment"
    ).textContent = `£${monthlyPayment.toFixed(2)}`;
    document.getElementById(
      "total-repayment-amount"
    ).textContent = `£${totalRepayment.toFixed(2)}`;

    document.getElementById("total-repayment").style.display = "block";
    document.getElementById("total-repayment-amount").style.display = "block";
  }

  document.getElementById("initial-results").style.display = "none";
  document.querySelector(".result-box").style.display = "block";
});
