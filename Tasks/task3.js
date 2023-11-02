const axios= require('axios');
const process = require('process');

async function execute(){
  
  const config= {
    method: 'GET',
    url: 'https://api.apilayer.com/exchangerates_data/symbols',
    headers: { apikey: process.env.APIKEY}
  };

  try {
    res= await axios.request(config);
    const keys= Object.keys(res.data.symbols);
    console.log("\nSymbol\tCurrency");
    for(let i=0;i<keys.length;i++){
      console.log(keys[i]+"\t"+res.data.symbols[keys[i]]);
    }
  }
  catch(error){
      console.error(error);
  } 
  console.log('\n');
  return Promise.resolve();
}
module.exports = {execute};