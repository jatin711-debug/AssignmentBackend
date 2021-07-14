const axios = require("axios").default;

const stockData = async (stockName,region) => {
    const options = {
        method: 'GET',
        url: 'https://apidojo-yahoo-finance-v1.p.rapidapi.com/auto-complete',
        params: {q: stockName, region: region},
        headers: {
          'x-rapidapi-key': '713f7536d6msh175d2b3677bbed6p162f3ajsn363d8c68869d',
          'x-rapidapi-host': 'apidojo-yahoo-finance-v1.p.rapidapi.com'
        }
      };
  await axios.request(options).then((response)=> {
	console.log(response.data);
    return response;
}).catch((error)=> {
	console.error(error);
    });
}

exports.data = stockData;
