const axios= require('axios');
const process = require('process');
const prompt = require('prompt-sync')({sigint: true});

async function execute(inputs, codes){
  const start_date=prompt("Enter start date in YYYY-MM-DD: ");
  const end_date=prompt("Enter end date in YYYY-MM-DD: ");
  var cf="";
  for(let i=0;i<codes.length;i++){ //cf= codes formatted 
    cf=cf+","+codes[i];
  }
  cf=cf.substring(1);

  const config= {
    method: 'GET',
    url: 'https://api.apilayer.com/exchangerates_data/timeseries?start_date='+start_date+
         '&end_date='+end_date+'&base='+inputs.base+'&symbols='+cf,
    headers: { apikey: process.env.APIKEY}
  };

  try {
    res= await axios.request(config);
     console.log("\n1 "+inputs.base+" is equivalent to :");
    const dates= Object.keys(res.data.rates);
    var temp='Date\t\t';
    for(let i=0;i<codes.length;i++){
      temp+=codes[i]+'\t';
    }
    console.log(temp);
    for(let i=0;i<dates.length;i++){
      temp=dates[i]+"\t";
      for(let a=0;a<codes.length;a++){
        temp+=(""+(res.data.rates[dates[i]])[codes[a]]).substring(0,6)+"\t";
      }
      console.log(temp);
    }
  }
  catch(error){
      console.error(error);
  }
  return Promise.resolve();
}
module.exports = {execute};