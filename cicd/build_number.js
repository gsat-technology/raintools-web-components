console.log(`starting build_number.js`);

const args = process.argv;
const filename = 'package.json'

const package = require(`../${filename}`);
var fs = require('fs');

const versionSplit = package.version.split('.')
const buildNumber = args[2]
const updatedVersion = `${versionSplit[0]}.${versionSplit[1]}.${buildNumber}`

package.version = updatedVersion

fs.writeFileSync(filename, JSON.stringify(package), {flag:'w'}, function(err) {
    if (err) throw err;
    console.log(`${filename} updated with version: ${updatedVersion}`);
});
