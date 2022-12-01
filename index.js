const record = [
  { year: "2018", result: "L" },
  { year: "2015", result: "W" },
  { year: "2016", result: "N/A" }
  //...
]
let year;
//data from indexTest.js 
//need to define a fuction superbowlWin that takes 1 argument, an `Array` of JavaScript `Object(record)

const superbowlWin = record => {
  
  const result = record.find(record => record.result === "W");
  if(result)
      return result.year;

  
}

console.log(superbowlWin(record));