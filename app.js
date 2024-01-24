document.addEventListener("DOMContentLoaded", function () {
    // Fetch currencies from the API
    fetch('https://open.er-api.com/v6/latest')
      .then(response => response.json())
      .then(data => {
        const currencies = Object.keys(data.rates);
  
        // Populate currency dropdowns
        const fromCurrencySelect = document.getElementById('fromCurrency');
        const toCurrencySelect = document.getElementById('toCurrency');
  
        currencies.forEach(currency => {
          const option1 = document.createElement('option');
          const option2 = document.createElement('option');
  
          option1.text = currency;
          option1.value = currency;
  
          option2.text = currency;
          option2.value = currency;
  
          fromCurrencySelect.add(option1);
          toCurrencySelect.add(option2);
        });
      })
      .catch(error => console.error('Error fetching currencies:', error));
  });
  
  function convert() {
    const fromCurrency = document.getElementById('fromCurrency').value;
    const toCurrency = document.getElementById('toCurrency').value;
    const amount = document.getElementById('amount').value;
  
    // Fetch exchange rates from the API
    fetch(`https://open.er-api.com/v6/latest/${fromCurrency}`)
      .then(response => response.json())
      .then(data => {
        const exchangeRate = data.rates[toCurrency];
        const convertedAmount = (amount * exchangeRate).toFixed(2);
  
        document.getElementById('result').innerText = `${amount} ${fromCurrency} = ${convertedAmount} ${toCurrency}`;
      })
      .catch(error => console.error('Error fetching exchange rates:', error));
  }
  