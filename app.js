const prompt = require('prompt-sync')({sigint: true});
const codes= require('./symbols');
task1= require('./Tasks/task1');
task2= require('./Tasks/task2');
task3= require('./Tasks/task3');
task4= require('./Tasks/task4');

const inputs={
  base: prompt("Enter base currency code : "),
  to: prompt("Enter final currency code : "),
  amount: prompt("Enter base amount : "),
  date: prompt("Enter date in YYYY-MM-DD format : ")
};

async function executeall(){ 
  await task1.execute(inputs);
  await task2.execute(inputs,codes);
  await task3.execute();
  task4.execute(inputs,codes);
}
executeall();