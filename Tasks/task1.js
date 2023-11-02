const axios= require('axios');
const process = require('process');

async function execute(inputs){
    const config= {
      method: 'GET',
      url: 'https://api.apilayer.com/exchangerates_data/convert?to='+inputs.to+'&from='+inputs.base+'&amount='
            +inputs.amount+'&date='+inputs.date,
      headers: { 'apikey': process.env.APIKEY}
    };
      try{
        const res= await axios.request(config);
        console.log("\n"+inputs.amount+" "+inputs.base+" is equivalent to "+res.data.result+' '+inputs.to+' as of '+inputs.date);
      }
      catch(error){
        console.error(error);
      }
    return Promise.resolve();
    //no reject case as the other tasks may still possible
}
module.exports = {execute};