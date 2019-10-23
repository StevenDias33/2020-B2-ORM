const datasets = require("./datasets.json")
const reset = '\x1b[0m'
const bright = '\x1b[1m'

exports = module.exports = {
  name: "Marathon",
  datasets,
  algo: function (input) {
    var data=input[0]
    parseInt(data)
    for(let i=0;i<input.length;i++) 
    if (data == 50 ) {
      console.log('argent')
      let output = 1000
      console.log(output)
    }
    return output
    //if (input == 0 )
    //{
    //  console.log("argent")
    //}
    
  },
  verify: function (dataset, output) {
    if (dataset.output !== output) {
      throw new Error(`${bright}Got ${output} but expected ${dataset.output}${reset}`)
    } else {
      return true
    }
  }
}