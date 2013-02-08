
var fs = require('fs');

var outputName = process.argv[2];
var inputNames = process.argv.slice(3);

var output = 'var $schemas = {\n';
inputNames.forEach(function(inputName) {
  var input = fs.readFileSync(inputName, 'UTF-8');
  var name = inputName.split('/').slice(-1)[0].replace(/\.json$/, '');
  output += '"' + name + '": ' + input + '\n';
});
output += "};\n";

fs.writeFileSync(outputName, output, 'UTF-8');