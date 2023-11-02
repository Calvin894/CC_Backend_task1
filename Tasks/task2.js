const axios= require('axios');
const process = require('process');

async function execute(inputs, codes){
  var cf="";
  for(let i=0;i<codes.length;i++){ //cf= codes formatted 
    cf=cf+","+codes[i];
  }
  cf=cf.substring(1);

  const config= {
    method: 'GET',
    url: 'https://api.apilayer.com/exchangerates_data/latest?symbols='+cf+'&base='+inputs.base,
    headers: { apikey: process.env.APIKEY}
  };

  try {
    res= await axios.request(config);
    console.log('\nCurrency\tAmount equal to 1 '+inputs.base);
    for(let i=0;i<codes.length;i++){
      console.log(codes[i]+"\t\t"+res.data.rates[codes[i]]);
    }
  }
  catch(error){
      console.error(error);
  }
  return Promise.resolve();
}
module.exports = {execute};