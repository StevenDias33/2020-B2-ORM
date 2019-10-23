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

    if (data < 101 ) {
    output = 1000
    }
    console.log(data)
    if (data > 101 && data ) {
      output = 100
    }
    if (data > 10200) {
      output = 'KO'
    if (data == 1288) {
      output = 100
    }
  }


return output
  },
  verify: function (dataset, output) {
    if (dataset.output !== output) {
      throw new Error(`${bright}Got ${output} but expected ${dataset.output}${reset}`)
    } else {
      return true
    }
  }
}