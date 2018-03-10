class PriceTracker {
    monero () {
      axios.get('https://api.coinmarketcap.com/v1/ticker/monero')
      .then(response => {
          return response.data[0]['price_btc']
      })
      .catch(error => {
        console.log(error);
      });
    }
}
