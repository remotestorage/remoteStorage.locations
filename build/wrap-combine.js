var fs = require('fs');

var outputName = process.argv[2];
var inputNames = process.argv.slice(3);

var output = "(function() {\n";
inputNames.forEach(function(inputName) {
  var input = fs.readFileSync(inputName, 'UTF-8');
  output += '\n' + input + '\n';
});
output += "})();";

fs.writeFileSync(outputName, output, 'UTF-8');
